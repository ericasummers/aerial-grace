import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MemberService } from '../member.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Member } from '../member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [MemberService]
})
export class MemberComponent implements OnInit {
  memberId: string = null;
  memberToDisplay: Member;

  constructor(private memberService: MemberService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.memberService.getMemberById(this.memberId).subscribe(dataLastEmittedObserver => {
      this.memberToDisplay = new Member(
        dataLastEmittedObserver.name,
        dataLastEmittedObserver.disciplines,
        dataLastEmittedObserver.biography,
        dataLastEmittedObserver.fans,
        dataLastEmittedObserver.profilePic,
        dataLastEmittedObserver.fullImage)
    });
  }

  likeProject() {
    console.log("fan");
    this.memberService.fanMember(this.memberId);
  }

}
