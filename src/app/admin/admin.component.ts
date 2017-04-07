import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitMember(newMember) {
    this.memberService.addMember(newMember);
  }

}
