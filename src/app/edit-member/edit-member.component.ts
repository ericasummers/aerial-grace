import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  editButtonClicked(memberToEdit) {
      this.memberService.updateMember(memberToEdit);
    }

    beginDeletingMember(memberToDelete) {
      if (confirm('Are you sure you want to delete this performer?')) {
        this.memberService.deleteMember(memberToDelete);
      }
    }
}
