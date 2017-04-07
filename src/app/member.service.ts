import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  getMemberById(memberId: string) {
    return this.angularFire.database.object('/members/' + memberId);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(thisMember) {
    var memberInFirebase = this.getMemberById(thisMember.$key);
    memberInFirebase.update({
      name: thisMember.name,
      disciplines: thisMember.disciplines,
      biography: thisMember.biography,
      profilePic: thisMember.profilePic,
      fullImage: thisMember.fullImage
    });
  }

  deleteMember(thisMember) {
    var memberInFirebase = this.getMemberById(thisMember.$key);
    memberInFirebase.remove();
  }

  addFanMember(memberId: string) {
    var memberInFirebase = this.getMemberById(memberId);
    var newFan = null;
    memberInFirebase.subscribe(dataLastEmittedObserver => {
      newFan = dataLastEmittedObserver.fans
    });
    newFan = parseInt(newFan) + 1;
    memberInFirebase.update({fans: newFan});
  }

}
