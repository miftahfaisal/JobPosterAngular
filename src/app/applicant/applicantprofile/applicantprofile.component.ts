import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router } from '@angular/router';
import { EditprofileComponent } from '../editprofile/editprofile.component';

@Component({
  selector: 'app-applicantprofile',
  templateUrl: './applicantprofile.component.html',
  styleUrls: ['./applicantprofile.component.css']
})
export class ApplicantprofileComponent implements OnInit {
    
  constructor(
      private router : Router
      ) {}

  items: MenuItem[];

  ngOnInit() {
      this.items = [{
          label:'My Profile',
          items: [
              {label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: '/applicant/myprofile'},
              {label: 'Education', icon: 'pi pi-fw pi-tag', routerLink: '/applicant/education'},
              {label: 'Work Experience', icon: 'pi pi-fw pi-briefcase', routerLink: '/applicant/work-experience'},
              {label: 'Skill', icon: 'pi pi-fw pi-user-plus', routerLink: '/applicant/skill'},
              {label: 'Application List', icon: 'pi pi-fw pi-list', routerLink: '/applicant/application-list'},
              {label: 'Resume', icon: 'pi pi-fw pi-file', routerLink: '/applicant/resume'}
          ]
      }];
  }
  
  displayDeletePhoto: boolean = false;

  showDialogDeletePhoto() {
      this.displayDeletePhoto = true;
  }
  cancelDialog(){
      this.displayDeletePhoto = false;
  }

  editProfile() {
      this.router.navigateByUrl('/applicant/edit-profile');
  }

  sidebarProfile: boolean = false;
  sidebarProfileActive(){
    this.sidebarProfile = true;
  }
  sidebarProfileInactive(){
    this.sidebarProfile = false;
  }
}
