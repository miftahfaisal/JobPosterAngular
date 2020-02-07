import { Component, OnInit } from '@angular/core';
import { Province } from 'src/app/models/Province';
import { JobCategory } from 'src/app/models/JobCategory';
import { FilterJob } from 'src/app/models/FilterJob';
import { ProvinceService } from 'src/app/services/province.service';
import { JobpostingService } from 'src/app/services/jobposting.service';
import { JobcategoryService } from 'src/app/services/jobcategory.service';
import { JobdescriptionService } from 'src/app/services/jobdescription.service';
import { JobrequirementsService } from 'src/app/services/jobrequirements.service';
import { ApplicationService } from 'src/app/services/application.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { AuthService } from 'src/app/services/auth.service';
import { Application } from 'src/app/models/Application';

@Component({
  selector: 'app-searchjobs',
  templateUrl: './searchjobs.component.html',
  styleUrls: ['./searchjobs.component.css']
})
export class SearchjobsComponent implements OnInit {

  jobPosting : any;
  province : any;
  jobCategory: any;
  provinceModel : Province = new Province(null,null,null);
  jobCategoryModel : JobCategory = new JobCategory(null,null,null);
  filterJob : FilterJob = new FilterJob(null,null,null,null);
  applicationModel : Application = new Application(null,null,null);
  jobDes: any;
  jobReq: any;
  job: any;
  id: any;
  sum: any;

  user:any;

  showSalary: boolean;
  showBtnLogin: boolean;
  showBtnApply: boolean;

  constructor(
    private pSvc : ProvinceService,
    private jpSvc : JobpostingService,
    private jcSvc : JobcategoryService,
    private jdSvc : JobdescriptionService,
    private jrSvc : JobrequirementsService,
    private apSvc : ApplicationService,
    private msgSvc : MessageService,
    private router : Router,
    private hp : HomepageComponent,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(this.auth.getUser());
    if(this.user!=null){
      this.showSalary = true;
      this.showBtnLogin = true;
      this.showBtnApply = true;
      this.applicationModel.setUser(this.user);
    }else if(this.user == null){
      this.showSalary = false;
      this.showBtnLogin = false;
      this.showBtnApply = false;
    }
    let respJob = this.jpSvc.getAllJobPosting();
    respJob.subscribe((data)=> this.jobPosting = data);
    let respProvince = this.pSvc.getAllProvince();
    respProvince.subscribe((data)=> this.province = data);
    let respJobCategory = this.jcSvc.getAllJobCategory();
    respJobCategory.subscribe((data)=>this.jobCategory = data);
  }

  searchJobId(id: number){
    let response = this.jpSvc.getJobPostingById(id);
    response.subscribe(
      (data)=> {
        this.job = data;
        this.applicationModel.setJobPosting(this.job);
      });
  }

  detailJob(id){
    this.jpSvc.getJobPostingById(id).subscribe(
      (data)=>{
        
      }
    )
    
    //this.router.navigateByUrl('search-job/detail/'+id)
  }

  searchJob(){
    this.filterJob.setProvinceName(this.provinceModel.provinceName)
    this.filterJob.setJobCategoryName(this.jobCategoryModel.jobCategoryName)
    this.jpSvc.getJobPostingByFilter(this.filterJob).subscribe(
      (data)=>{this.jobPosting = data},
      (error)=>{this.msgSvc.add({key:'tc',severity:'warn',summary:'Warn Message', detail:'Job doesnt exist'});}
    )
  }

  apply(){
    this.apSvc.applicantApply(this.applicationModel).subscribe(
      (data)=>{
        this.msgSvc.add({key:'succes',severity:'warn',summary:'Warn Message', detail:'Apply Success'});
        location.href = "/applicant/search-job";
      },
      (error)=>{this.msgSvc.add({key:'tc2',severity:'warn',summary:'Warn Message', detail:error.error})
      ;}
    )
  }

  goTo(){
    this.router.navigateByUrl('/applicant/search-job')
  }

  goToProfile(){
    this.router.navigateByUrl('/applicant/myprofile');
  }

  resetFilter(){
    location.href="/applicant/search-job";
  }

  sidebarProfile: boolean = false;
  sidebarProfileActive(){
    this.sidebarProfile = true;
  }
  sidebarProfileInactive(){
    this.sidebarProfile = false;
  }

  displayLogin: boolean = false;
  showDialogLogin() {
      this.displayLogin = true;
  }
  cancelDialogLogin(){
      this.displayLogin = false;
  }

  displayDetailJob: boolean = false;
  showDialogDetailJob(id) {
    this.displayDetailJob = true;
    this.searchJobId(id);
    let respjd = this.jdSvc.getAllJobDescriptionByJobPostingId(id);
    respjd.subscribe((datajd)=> this.jobDes = datajd);
    let repsjr = this.jrSvc.getAllJobRequrementByJobPostingId(id);
    repsjr.subscribe((datajr)=> this.jobReq = datajr);
    let respsum = this.apSvc.getApplicationCount(id);
    respsum.subscribe((datasum)=> this.sum = datasum);
  }
  cancelDialogDetailJob(){
      this.displayDetailJob = false;
  }

  logOut(){
    this.auth.logout();
  }

}
