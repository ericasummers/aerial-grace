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
  filterByDiscipline: string = "Discipline";
  disciplineChosen: any;

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
    $('select').material_select();

  }

  goToMemberPage(clickedMember) {
    this.router.navigate(['member', clickedMember.$key]);
  }


  onChange(optionFromMenu) {
    this.filterByDiscipline = optionFromMenu.toLowerCase();
  }

}
