import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router } from '@angular/router';
import { EditprofileComponent } from '../editprofile/editprofile.component';
import { AuthService } from 'src/app/services/auth.service';
import { ApplicanteducationService } from 'src/app/services/applicanteducation.service';
import { ApplicantworkexperienceService } from 'src/app/services/applicantworkexperience.service';
import { ApplicantskillService } from 'src/app/services/applicantskill.service';
import { ApplicantprojectService } from 'src/app/services/applicantproject.service';
import { HomepageComponent } from 'src/app/homepage/homepage.component';

@Component({
  selector: 'app-applicantprofile',
  templateUrl: './applicantprofile.component.html',
  styleUrls: ['./applicantprofile.component.css']
})
export class ApplicantprofileComponent implements OnInit {
  aplEdu: any;
  aplWorkExp: any;
  aplSkill: any;
  aplProject: any;
  token: any;
  user: any;
  showAP: boolean;
  showAWE: boolean;
  showAE: boolean;
  showAS: boolean;
  showADESC: boolean;
  constructor(
      private router : Router,
      private authService : AuthService,
      private aplEduService : ApplicanteducationService,
      private aplWorkExpService : ApplicantworkexperienceService,
      private aplSkillService : ApplicantskillService,
      private aplProjectService : ApplicantprojectService,
      private hp: HomepageComponent
      ) {}

  ngOnInit() {
    if(this.hp.storage.get('token')!=null){
      this.hp.storage.get('user').subscribe((user) => {
        this.user = user;
        if(this.user.selfDescription == null){
          this.showADESC = true;
        }
        // console.log(this.user.id);
        this.getEduApplicant(this.user.id);
        this.getWorkExpApplicant(this.user.id);
        this.getProjectApplicant(this.user.id)
        this.getSkillApplicant(this.user.id);
      });
      this.hp.storage.get('token').subscribe((token) => {
        this.token = token;
      });
    }else{
      this.router.navigateByUrl('/')
    }
  }

  editProfile() {
      this.router.navigateByUrl('/applicant/edit-profile');
  }
  editEducation() {
    this.router.navigateByUrl('/applicant/edit-education');
  }
  editWorkExperience() {
    this.router.navigateByUrl('/applicant/edit-work-experience');
  }
  editSkill() {
    this.router.navigateByUrl('/applicant/edit-skill');
  }
  logOut(){
    this.authService.logout();
  }
  getEduApplicant(id){
    this.aplEduService.getEducationByApplicant(id).subscribe(data=>{
      this.aplEdu = data;
      if(this.aplEdu == null){
        this.showAE = true;
      }
      console.log(this.aplEdu);
    })
  }

  getWorkExpApplicant(id){
    this.aplWorkExpService.getWorkExpByApplicant(id).subscribe(data=>{
      this.aplWorkExp = data;
      if(this.aplWorkExp == null){
        this.showAWE = true;
      }
      console.log(this.aplWorkExp);
    })
  }

  getSkillApplicant(id){
    this.aplSkillService.getSkillByApplicant(id).subscribe(data=>{
      this.aplSkill = data;
      if(this.aplSkill == null){
        this.showAS = true;
      }
      console.log(this.aplSkill);
    })
  }

  getProjectApplicant(id){
    this.aplProjectService.getProjectByApplicant(id).subscribe(data=>{
      this.aplProject = data;
      if(this.aplProject == null){
        this.showAP = true;
      }
      console.log(this.aplProject);
    })
  }


  // koding untuk pop-up dan sidebar
  displayDeletePhoto: boolean = false;
  showDialogDeletePhoto() {
    this.displayDeletePhoto = true;
  }
  cancelDialogDeletePhoto(){
    this.displayDeletePhoto = false;
  }
  sidebarProfile: boolean = false;
  sidebarProfileActive(){
    this.sidebarProfile = true;
  }
  sidebarProfileInactive(){
    this.sidebarProfile = false;
  }

  displayApplicationList: boolean = false;
  showDialogApplicationList(){
    this.displayApplicationList = true;
    this.sidebarProfile = false;
    this.displayInterviewList = false;
  }
  cancelDialogApplicationList(){
    this.displayApplicationList = false;
  }
  displayInterviewList: boolean = false;
  showDialogInterviewList(){
    this.displayInterviewList = true;
    this.displayApplicationList = false;
  }
  cancelDialogInterviewList(){
    this.displayInterviewList = false;
  }

}