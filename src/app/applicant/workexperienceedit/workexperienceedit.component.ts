import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { ApplicantworkexperienceService } from 'src/app/services/applicantworkexperience.service';
import { ApplicantWorkExperience } from 'src/app/models/ApplicantWorkExperience';
import { JoblevelService } from 'src/app/services/joblevel.service';
import { JobcategoryService } from 'src/app/services/jobcategory.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-workexperienceedit',
  templateUrl: './workexperienceedit.component.html',
  styleUrls: ['./workexperienceedit.component.css']
})
export class WorkexperienceeditComponent implements OnInit {

  startDate : Date;
  endDate : Date;
  user: any;
  aplWE: any;
  jobLevel: any;
  jobCat: any;
  id: any;
  token: any;
  aplworkexpedit: any;
  aplWEModel: ApplicantWorkExperience = new ApplicantWorkExperience("","",null,null,"",0,null,null,null)

  constructor(
    private router: Router,
    private aplWEService: ApplicantworkexperienceService,
    private aplJobLevelService: JoblevelService,
    private aplJobCatService: JobcategoryService,
    private hp: HomepageComponent,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(this.auth.getUser());
    if(this.user!=null){
      this.aplWE = this.getWEApplicant(this.user.id);
      this.aplWEModel.setUser(this.user);
      this.getAllJobLevel();
      this.getAllJobCategory();
      this.token = this.auth.getToken();
    }else{
      this.router.navigateByUrl('/')
    }
  }

  searchAplWorkExpById(id){
    this.aplWEService.getWorkExpById(id).subscribe(
      (data)=>
      {
        this.aplworkexpedit = data;
      }
    )
  }

  displayAddWorkExperience: boolean = false;
  showDialogAddWorkExperience() {
      this.displayAddWorkExperience = true;
  }
  cancelDialog(){
      this.displayAddWorkExperience = false;
  }

  addWorkExperience(){
    this.aplWEService.inputWorkExp(this.aplWEModel).subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/applicant/myprofile')
    })
  }
  editWorkExperience(){
    this.aplWEService.alterWorkExp(this.aplworkexpedit).subscribe(
      (data)=>
      {
        this.backToProfile();
      }
    )
  }
  deleteWorkExperience(){
    this.aplWEService.dropWorkExp(this.id).subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl('/applicant/myprofile')
    })
  }
  backToProfile(){
    this.router.navigateByUrl('/applicant/myprofile')
  }

  getWEApplicant(id){
    this.aplWEService.getWorkExpByApplicant(id).subscribe(data=>{
      this.aplWE = data;
      console.log(this.aplWE);
    })
  }

  getAllJobLevel(){
    this.aplJobLevelService.getAllJobLevel().subscribe((data)=>{
      this.jobLevel = data;
    })
  }

  getAllJobCategory(){
    this.aplJobCatService.getAllJobCategory().subscribe((data)=>{
      this.jobCat = data;
    })
  }

  sidebarProfile: boolean = false;
  sidebarProfileActive(){
    this.sidebarProfile = true;
  }
  sidebarProfileInactive(){
    this.sidebarProfile = false;
  }

  displayDeleteWorkExp: boolean = false;
  showDialogDeleteWorkExp(id) {
      this.id = id;
      this.displayDeleteWorkExp = true;
  }
  cancelDialogDelete(){
      this.displayDeleteWorkExp = false;
  }

  displayEditWorkExp: boolean = false;
  showDialogEditWorkExp(id){
    this.id = id;
    this.displayEditWorkExp = true;
    this.searchAplWorkExpById(this.id);
  }
  cancelDialogEdit(){
    this.displayEditWorkExp = false;
  }
  
  logOut(){
    this.auth.logout();
  }
}
