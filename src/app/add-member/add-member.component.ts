import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  @Output() clickSender = new EventEmitter();

  addFormShown: boolean = false;

  showAddForm() {
    this.addFormShown = true;
  }

  addButtonClicked(name: string, disciplines: string, biography: string, profilePic: string, fullImage: string) {
    if (!name || !disciplines || !biography || !profilePic || !fullImage) {
      alert("Please complete all fields to add a new company member!");
    } else {
      var newMember: Member = new Member(name, disciplines, biography, profilePic, fullImage);
      this.clickSender.emit(newMember);
      this.addFormShown = false;
    }
  }

  cancelMemberAdd() {
    this.addFormShown = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
