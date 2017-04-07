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

  fanMember(memberId: string) {
    var memberInFirebase = this.getMemberById(memberId);
    var newFan = null;
    memberInFirebase.subscribe(dataLastEmittedObserver => {
      newFan = dataLastEmittedObserver.fans
    });
    newFan = newFan + 1;
    memberInFirebase.update({fans: newFan});
  }

}
