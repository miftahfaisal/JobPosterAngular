import { Component, OnInit } from '@angular/core';
import { JobpostingService } from 'src/app/services/jobposting.service';
import { Router } from '@angular/router';
import { JobPosting } from 'src/app/models/JobPosting';
import { ProvinceService } from 'src/app/services/province.service';
import { CityService } from 'src/app/services/city.service';
import { JobpositionService } from 'src/app/services/jobposition.service';
import { JobdescriptionService } from 'src/app/services/jobdescription.service';
import { JobrequirementsService } from 'src/app/services/jobrequirements.service';
import { JobDescription } from 'src/app/models/JobDescription';

@Component({
  selector: 'app-jobposting',
  templateUrl: './jobposting.component.html',
  styleUrls: ['./jobposting.component.css']
})
export class JobpostingComponent implements OnInit {

  jobPosting: any;
  jobPost: JobPosting = new JobPosting("",0,null,null,"",null,"",null,null,null);
  jp: any;
  deskripsi: string;
  jobDes: string[];
  jd: any;
  jobReq: Array<string>;
  jr: any;
  province: any;
  city: any;
  jobPosition: any;

  constructor(
    private router : Router,
    private jobPostingService : JobpostingService,
    private provinceService : ProvinceService,
    private cityService : CityService,
    private jobPositionService : JobpositionService,
    private jobDesService : JobdescriptionService,
    private jobReqService : JobrequirementsService
  ){}

  ngOnInit() {
    this.jobPostingService.getAllJobPosting().subscribe((data)=>{
      this.jobPosting = data
    })
    this.provinceService.getAllProvince().subscribe((data)=>{
      this.province = data
    })
    this.cityService.getAllCity().subscribe((data)=>{
      this.city = data
    })
    this.jobPositionService.getAllJobPosition().subscribe((data)=>{
      this.jobPosition = data
    })
  }

  addJobDes(){
    console.log(this.deskripsi)
    for(var jd of this.jobDes){
      console.log(jd)
    }
    this.jobDes.push(this.deskripsi);
  }
  dropJobDes(index){
    this.jobDes.splice(index, 1);
  }

  // method untuk hit API backend
  detailJob(id){
    this.jobPostingService.getJobPostingById(id).subscribe((data)=>{
      this.jobPosting = data;
      this.router.navigateByUrl('/recruiter/job-posting/detail/'+id);
    })
  }

  addNewJobPost(){
    this.jobPostingService.inputJobPosting(this.jobPost).subscribe((data)=>{
      this.jp = data
    })
  }
  addAllJobDes(){
    this.jobDesService.inputJobDescription(this.jobDes).subscribe((data)=>{
      this.jd = data
    })
  }
  addAllJobReq(){
    this.jobReqService.inputJobRequirement(this.jobReq).subscribe((data)=>{
      this.jr = data
    })
  }

  addAllNewJobPost(){
    this.addNewJobPost();
    this.addAllJobDes();
    this.addAllJobReq();
  }

  // method untuk pop-up dan sidebar
  displayNewJobPost: boolean = false;
  showDialogNewJobPost(){
    this.displayNewJobPost = true;
  }
  cancelDialogNewJobPost(){
    this.displayNewJobPost = false;
  }

  displayAddJobDes: boolean = false;
  showDialogAddJobDes(){
    this.displayAddJobDes = true;
  }
  cancelDialogAddJobDes(){
    this.displayAddJobDes = false;
  }

  displayAddJobReq: boolean = false;
  showDialogAddJobReq(){
    this.displayAddJobReq = true;
  }
  cancelDialogAddJobReq(){
    this.displayAddJobReq = false;
  }

  sidebarAccount: boolean = false;
  sidebarAccountActive(){
    this.sidebarAccount = true;
  }
  sidebarAccountInactive(){
    this.sidebarAccount = false;
  }

  logOut(){

  }
}
