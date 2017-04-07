import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MemberService]
})
export class HomeComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  filterByDiscipline: string = "discipline";

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
    $('select').material_select();
  }

  goToMemberPage(clickedMember) {
    this.router.navigate(['member', clickedMember.$key]);
  }

  onDisciplineChange(optionFromMenu) {
    this.filterByDiscipline = optionFromMenu;
  }
}
