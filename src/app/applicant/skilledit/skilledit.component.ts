import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skilledit',
  templateUrl: './skilledit.component.html',
  styleUrls: ['./skilledit.component.css']
})
export class SkilleditComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  displayAddSkill: boolean = false;
  showDialogAddSkill() {
      this.displayAddSkill = true;
  }
  cancelDialogAdd(){
      this.displayAddSkill = false;
  }
  
  displayDeleteSkill: boolean = false;
  showDialogDeleteSkill() {
      this.displayDeleteSkill = true;
  }
  cancelDialogDelete(){
      this.displayDeleteSkill = false;
  }

  addSkill(){

  }
  editSkill(){

  }
  deleteSkill(){

  }
  backToProfile(){
    this.router.navigateByUrl('/applicant/myprofile')
  }

  sidebarProfile: boolean = false;
  sidebarProfileActive(){
    this.sidebarProfile = true;
  }
  sidebarProfileInactive(){
    this.sidebarProfile = false;
  }
  
  logOut(){

  }
}
