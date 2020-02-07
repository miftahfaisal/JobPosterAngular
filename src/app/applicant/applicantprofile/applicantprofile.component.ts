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
import { ApplicantsalaryService } from 'src/app/services/applicantsalary.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { SelectItem } from 'primeng/api/selectitem';
import { ApplicationstatechangeService } from 'src/app/services/applicationstatechange.service';
import { InterviewtestscheduleService } from 'src/app/services/interviewtestschedule.service';
import { InterviewSchedule } from 'src/app/models/InterviewSchedule';
import { DocumentService } from 'src/app/services/document.service';
import { ApplicationService } from 'src/app/services/application.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-applicantprofile',
  templateUrl: './applicantprofile.component.html',
  styleUrls: ['./applicantprofile.component.css']
})

export class ApplicantprofileComponent implements OnInit {
  
  apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/user';

  aplEdu: any;
  aplWorkExp: any;
  aplSkill: any;
  aplProject: any;
  aplSalary: any;
  aplInterviewTest: any;
  aplRecentEdu: any;
  aplDocument: any;
  
  token: any;
  user: any;
  id: any;

  idInterviewList: any;

  showAP: boolean;
  showAWE: boolean;
  showAE: boolean;
  showAS: boolean;
  showADESC: boolean;
  showASAL: boolean;
  showImage: boolean;
  showAEToggle: boolean;

  extensionFile: any;
  splitFile: any;

  // documentData: string[] = [];
  documentData: any;
  imageData: any;

  file: any;
  progressBar: any;

  applicationList: any;
  interviewList: any;

  reasonReschedule: any;
  reasonReject: any;

  interviewTestModel : InterviewSchedule;

  constructor(
      private router : Router,
      private aplEduService : ApplicanteducationService,
      private aplWorkExpService : ApplicantworkexperienceService,
      private aplSkillService : ApplicantskillService,
      private aplProjectService : ApplicantprojectService,
      private aplSalaryService : ApplicantsalaryService,
      private aplStateChangeService : ApplicationstatechangeService,
      private aplInterviewScheduleService: InterviewtestscheduleService,
      private aplService: ApplicationService,
      // private hp: HomepageComponent,
      private auth: AuthService,
      private httpClient: HttpClient,
      private documentService: DocumentService
      ) {
       
      }

  ngOnInit() {
    this.user = JSON.parse(this.auth.getUser());
    if(this.user!=null){
        console.log(this.user)
        let imageData;
        if(this.user.selfDescription == null || this.user.selfDescription == ''){
          this.showADESC = true;
        }
        if(this.user.image == null){
          this.showImage = false;
        }

        if(this.user.image != null){
          this.showImage = true;
          imageData = 'data:'+this.user.imageType+';base64,'+this.user.image;
        }
        if(this.user.salary == null){
          this.showASAL = true;
        }

        this.getImageData(imageData);
        this.getEduApplicant(this.user.id);
        this.getWorkExpApplicant(this.user.id);
        this.getProjectApplicant(this.user.id)
        this.getSkillApplicant(this.user.id);
        // this.getSalaryApplicant(this.user.id);
        this.getRecentEduByApplicant(this.user.id);
    }else{
      this.router.navigateByUrl('/')
    }
  }
  s:string= 'a'
  uploadPhoto(){
    this.s =='b';
    let formData = new FormData();
    this.progressBar = 0;
    formData.append("upload",this.file);
    this.httpClient.post(this.apiURL+"/upload/"+this.id,formData,{reportProgress:true,observe:'events'}).subscribe(
      (events)=>{
        this.displayProgressBar = true;
        if(events.type === HttpEventType.UploadProgress)
        {
          this.progressBar = Math.round(events.loaded/events.total * 100);
        }
        else if(events.type === HttpEventType.Response)
        { 
          this.progressBar = '';
          localStorage.setItem('user',JSON.stringify(events.body));
          location.href = '/applicant/myprofile'
        }
    }
    )
   
  }

  getFile(event){
    this.file = <File> event.target.files[0];
  }

  getImageData(imageData){
    this.imageData = imageData;
  }
  editProfile(){
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
  editProject(){
    this.router.navigateByUrl('/applicant/edit-project')
  }
  getEduApplicant(id){
    this.aplEduService.getEducationByApplicant(id).subscribe(
      (data)=>{this.aplEdu = data; this.showAEToggle = true;},
      (error)=>{this.showAE = true;}
      )
  }

  getWorkExpApplicant(id){
    this.aplWorkExpService.getWorkExpByApplicant(id).subscribe(
      (data)=>{this.aplWorkExp = data;},
      (error)=>{this.showAWE = true;}
      )
  }

  getSkillApplicant(id){
    this.aplSkillService.getSkillByApplicant(id).subscribe(
      (data)=>{this.aplSkill = data;},
      (error)=>{this.showAS = true;}
    )
  }

  getProjectApplicant(id){
    this.aplProjectService.getProjectByApplicant(id).subscribe(
      (data)=>{this.aplProject = data;},
      (error)=>{this.showAP = true;}
    )
  }

  // getSalaryApplicant(id){
  //   this.aplSalaryService.getSalaryByApplicant(id).subscribe(
  //     (data)=>{this.aplSalary = data;},
  //     (error)=>{this.showASAL = true;}
  //   )
  // }

  getDocumentApplicant(){
    this.documentService.getDocumentByApplicant(this.user.id).subscribe(
      (data)=>{
        this.aplDocument = data;
      }
    )
  }

  getListApplication(){
    this.aplStateChangeService.getListApplicationByApplicant(this.user.id).subscribe(
      (data)=>{
        this.applicationList = data;
      }
    )
  }

  getListInterview(){
    this.aplInterviewScheduleService.getListScheduleByApplicant(this.user.id).subscribe(
      (data)=>{
        this.interviewList = data;
      }
    )
  }

  getRecentEduByApplicant(id){
    this.aplEduService.getRecentEducationByApplicant(id).subscribe(
      (data)=>{
        this.aplRecentEdu = data;
      },
      (error)=>{

      }
    )
  }

  attend(id){
    this.aplInterviewScheduleService.getInterviewTestScheduleById(id).subscribe(
      (data)=>
      {
        this.aplInterviewTest = data;
        this.aplService.attendInterview(this.aplInterviewTest).subscribe(
          (data)=>
          {
            location.href = 'applicant/myprofile';
          }
        )
        
      }
    )
  }

  reschedule(){
    this.aplInterviewScheduleService.getInterviewTestScheduleById(this.idInterviewList).subscribe(
      (data)=>
      {
       
        this.aplInterviewTest = data;
        this.aplInterviewTest.reschedule = true;
        this.aplInterviewTest.rescheduleReason = this.reasonReschedule;
        this.aplService.rescheduleRequestByApplicant(this.aplInterviewTest).subscribe(
          (data)=>
          {
           
          }
        )
      }
    )
  }

  reject(){
    this.aplInterviewScheduleService.getInterviewTestScheduleById(this.idInterviewList).subscribe(
      (data)=>
      {
        this.aplInterviewTest = data;
        this.aplInterviewTest.rejectReason = this.reasonReject;
        
        let reason = this.reasonReject;

        let applicationApplicant : any;

        this.aplService.getApplicationApplicant(this.aplInterviewTest.application.id).subscribe(
          (data)=>{
            applicationApplicant = data;
            this.aplService.rejectByApplicant(applicationApplicant, reason).subscribe(
              (data)=>{
                location.href = 'applicant/myprofile';
              }
            )
          }
        )

        // 
        // if(this.aplInterviewTest.reschedule == true){
        //   this.aplInterviewTest.reschedule = false;
        // }
        // this.aplInterviewTest.reject = true;
        // this.aplInterviewScheduleService.alterInterviewTestSchedule(this.aplInterviewTest).subscribe(
        //   (data)=>{
        //     alert("UHUY");
        //   }
        // )
      }
    )
  }

  sidebarProfile: boolean = false;
  sidebarProfileActive(){
    this.sidebarProfile = true;
  }
  sidebarProfileInactive(){
    this.sidebarProfile = false;
  }

  displayDeletePhoto: boolean = false;
  showDialogDeletePhoto() {
      this.displayDeletePhoto = true;
  }
  cancelDialog(){
      this.displayDeletePhoto = false;
  }

  displayReasonReschedule: boolean = false;
  showDialogReasonReschedule(id){
    this.idInterviewList = id;
    this.displayReasonReschedule = true;
  }

  cancelDialogReasonReschedule(){
    this.displayReasonReschedule = false;
  }

  displayReasonReject: boolean = false;
  showDialogReasonReject(id){
    this.idInterviewList = id;
    this.displayReasonReject = true;
  }

  cancelDialogReasonReject(){
    this.displayReasonReject = false;
  }

  displayUploadPhoto: boolean = false;
  showDialogUploadPhoto(id){
    this.id = id;
    this.displayUploadPhoto = true;
  }
  cancelDialogUpload(){
    this.displayUploadPhoto = false;
  }

  displayApplicationList: boolean = false;
  showDialogApplicationList(){
    this.displayApplicationList = true;
    this.sidebarProfile = false;
    this.displayInterviewList = false;
    this.getListApplication();
  }
  cancelDialogApplicationList(){
    this.displayApplicationList = false;
  }

  displayInterviewList: boolean = false;
  showDialogInterviewList(){
    this.displayInterviewList = true;
    this.cancelDialogApplicationList();
    this.getListInterview();
  }

  cancelDialogInterviewList(){
    this.displayInterviewList = false;
  }

  displayDocumentList: boolean = false;
  showDialogDocumentList(){
    this.displayDocumentList = true;
    this.sidebarProfile = false;
    this.getDocumentApplicant();
  }

  cancelDialogDocumentList(){
    this.displayDocumentList = false;
  }

  displayPreview: boolean = false;
  showDialogPreview(fileType, file){
    this.documentData = 'data:'+fileType+';base64,'+file;
    this.displayPreview = true;
  }

  displayProgressBar: boolean = false;
  logOut(){
    this.auth.logout();
  }
}