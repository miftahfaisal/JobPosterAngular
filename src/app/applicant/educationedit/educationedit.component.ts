import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicanteducationService } from 'src/app/services/applicanteducation.service';
import { ApplicantEducation } from 'src/app/models/ApplicantEducation';
import { AuthService } from 'src/app/services/auth.service';
import { EducationlevelService } from 'src/app/services/educationlevel.service';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { MajorService } from 'src/app/services/major.service';
import { EducationLevel } from 'src/app/models/EducationLevel';

@Component({
  selector: 'app-educationedit',
  templateUrl: './educationedit.component.html',
  styleUrls: ['./educationedit.component.css']
})
export class EducationeditComponent implements OnInit {
  
  graduateDate : Date;
  appEdu : any;
  user: any;
  aplEdu: any;
  apleduedit: any;
  id: any;
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
    private hp : HomepageComponent
  ) { }

  ngOnInit() {
    if(this.hp.storage.get('token')!=null){
      this.hp.storage.get('user').subscribe((user) => {
        this.user = user;
        this.aplEdu = this.getEduApplicant(this.user.id);
        this.aplEduModel.setUser(this.user);
      });
      this.hp.storage.get('token').subscribe((token) => {
        this.token = token;
      });
      this.getAllEduLevel();
      this.getAllMajorByEduLevel();
    }else{
      this.router.navigateByUrl('/')
    }
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
      this.id = this.searchAplEduById(id);
  }
  cancelDialogEdit(){
      this.displayEditEducation = false;
  }

  getAllEduLevel(){
    this.eduLevelService.getAllEduLevel().subscribe((data)=>{
      this.eduLevel = data;
      console.log(this.eduLevel.id)
    })
  }
  eds:any;
  getAllMajorByEduLevel(){
    this.majorService.getMajorByEduLevel(this.eds.id).subscribe((data)=>{
      this.major = data;
    })
  }

  getEduApplicant(id){
    this.aplEduService.getEducationByApplicant(id).subscribe(data=>{
      this.aplEdu = data;
      console.log(this.aplEdu);
    })
  }

  addEducation(){
    this.aplEduService.inputEducation(this.aplEduModel).subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/applicant/myprofile')
    })
    
  }
  editEducation(){
    this.aplEduModel.setId(this.apleduedit.id)
    this.aplEduService.alterEducation(this.aplEduModel).subscribe((data)=>{
      console.log(data),
      this.appEdu = data
    })
  }
  deleteEducation(id){
    this.aplEduService.dropEducation(id).subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/applicant/myprofile')
    });
  }
  searchAplEduById(id){
    let resp = this.aplEduService.getEducationById(id);
    resp.subscribe((data)=> this.apleduedit = data);
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
