import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicanteducationService } from 'src/app/services/applicanteducation.service';
import { ApplicantEducation } from 'src/app/models/ApplicantEducation';
import { AuthService } from 'src/app/services/auth.service';
import { EducationlevelService } from 'src/app/services/educationlevel.service';
import { MajorService } from 'src/app/services/major.service';
import { EducationLevel } from 'src/app/models/EducationLevel';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-educationedit',
  templateUrl: './educationedit.component.html',
  styleUrls: ['./educationedit.component.css']
})
export class EducationeditComponent implements OnInit {
  
  graduateDate : Date;
  startDate: Date;
  endDate: Date;

  id: any;

  appEdu : any;
  user: any;
  aplEdu: any;
  apleduedit: any;
  token: any;
  eduLevel: any;
  idEduLevel: any;
  major: any;
  aplEduModel : ApplicantEducation = new ApplicantEducation(null,null,null,null,null,null);

  constructor(
    private router : Router,
    private aplEduService: ApplicanteducationService,
    private eduLevelService : EducationlevelService,
    private majorService : MajorService,
    private auth: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(this.auth.getUser());
    if(this.user!=null){
      this.getEduApplicant(this.user.id);
      this.aplEduModel.setUser(this.user);
      this.getAllEduLevel();
      this.getAllMajorByEduLevel();
      this.token = this.auth.getToken();
    }else{
      this.router.navigateByUrl('/')
    }
  }

  getAllEduLevel(){
    this.eduLevelService.getAllEduLevel().subscribe((data)=>{
      this.eduLevel = data;
    })
  }
  eds:any;
  getAllMajorByEduLevel(){
    this.majorService.getMajorByEduLevel(this.eds.id).subscribe((data)=>{
      this.major = data;
    })
  }

  getAllMajorByEduLevel2(){
    this.majorService.getMajorByEduLevel(this.apleduedit.major.eduLevel.id).subscribe((data)=>{
      this.major = data;
    })
  }

  getEduApplicant(id){
    this.aplEduService.getEducationByApplicant(id).subscribe(data=>{
      this.aplEdu = data;
    })
  }

  addEducation(){
    this.aplEduService.inputEducation(this.aplEduModel).subscribe((data)=>{
      this.messageService.add({key: 'sc', severity:'success', summary: 'Success', detail: 'Education submitted'})
      this.reloadPage();
    },(error)=>{
      this.messageService.add({key: 'wr', severity:'warn', summary: 'Warn', detail: error.error})
    })
    
  }

  editEducation(){
    console.log(this.apleduedit)
    this.aplEduService.alterEducation(this.apleduedit).subscribe((data)=>{
      this.appEdu = data;
      this.messageService.add({key: 'sc', severity:'success', summary: 'Success', detail: 'Education edited'})
      this.reloadPage();
    },(error)=>{
      this.messageService.add({key: 'wr', severity:'warn', summary: 'Warn', detail: error.error})
    })
  }
  deleteEducation(){
    this.aplEduService.dropEducation(this.id).subscribe((data)=>{
      this.messageService.add({key: 'sc', severity:'success', summary: 'Success', detail: 'Education deleted'})
      this.reloadPage();
    });
  }
  
  searchAplEduById(id){
    let resp = this.aplEduService.getEducationById(id);
    resp.subscribe((data)=> {
      this.apleduedit = data
      console.log(this.apleduedit);
      this.startDate = this.apleduedit.startDate;
      this.endDate = this.apleduedit.endDate;
      this.majorService.getMajorByEduLevel(this.apleduedit.major.eduLevel.id).subscribe((data)=>{
        this.major = data;
      })
    });
  }

  reloadPage(){
    location.href = '/applicant/edit-education'
  }

  displayAddEducation: boolean = false;
  showDialogAddEducation() {
      this.displayAddEducation = true;
  }
  cancelDialogAdd(){
      this.displayAddEducation = false;
  }
  
  displayEditEducation: boolean = false;
  showDialogEditEducation(id) {
      this.displayEditEducation = true;
      this.searchAplEduById(id);
  }
  cancelDialogEdit(){
      this.displayEditEducation = false;
  }

  displayDeleteEducation: boolean = false;
  showDialogDeleteEducation(id){
    this.id = id;
    this.displayDeleteEducation = true;
  }

  cancelDialogDeleteEducation(){
    this.displayDeleteEducation = false;
  }
  
  logOut(){
    this.auth.logout();
  }
}
