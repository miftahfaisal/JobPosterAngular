import { Component, OnInit } from '@angular/core';
import { JobpostingService } from '../services/jobposting.service';
import { Router } from '@angular/router';
import { FilterJob } from '../models/FilterJob';
import { ProvinceService } from '../services/province.service';
import { JobcategoryService } from '../services/jobcategory.service';
import { Province } from '../models/Province';
import { JobCategory } from '../models/JobCategory';
import { stringify } from 'querystring';
import { ApplicationService } from '../services/application.service';
import { JobrequirementsService } from '../services/jobrequirements.service';
import { JobdescriptionService } from '../services/jobdescription.service';

@Component({
  selector: 'app-searchjob',
  templateUrl: './searchjob.component.html',
  styleUrls: ['./searchjob.component.css']
})
export class SearchjobComponent implements OnInit {

  jobPosting : any;
  province : any;
  jobCategory: any;
  provinceModel : Province = new Province(null,null,null)
  jobCategoryModel : JobCategory = new JobCategory(null,null,null)
  filterJob : FilterJob = new FilterJob(null,null,null,null)
  jobDes: any;
  jobReq: any;
  job: any;
  id: any;
  sum: any;

  constructor(
    private pSvc : ProvinceService,
    private jpSvc : JobpostingService,
    private jcSvc : JobcategoryService,
    private jdSvc : JobdescriptionService,
    private jrSvc : JobrequirementsService,
    private apSvc : ApplicationService,
    private router : Router
  ) { }

  ngOnInit() {
    let respJob = this.jpSvc.getAllJobPosting();
    respJob.subscribe((data)=> this.jobPosting = data);
    let respProvince = this.pSvc.getAllProvince();
    respProvince.subscribe((data)=> this.province = data);
    let respJobCategory = this.jcSvc.getAllJobCategory();
    respJobCategory.subscribe((data)=>this.jobCategory = data);
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
    this.id = this.searchJobId(id);
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

  searchJobId(id: number){
    let response = this.jpSvc.getJobPostingById(id);
    response.subscribe((data)=> this.job = data);
  }

  detailJob(id){
    let response = this.jpSvc.getJobPostingById(id);
    response.subscribe((data)=> this.jobPosting = data);
    this.router.navigateByUrl('search-job/detail/'+id)
  }

  searchJob(){
    this.filterJob.setProvinceName(this.provinceModel.provinceName)
    this.filterJob.setJobCategoryName(this.jobCategoryModel.jobCategoryName)
    console.log(this.provinceModel)
    console.log(this.jobCategoryModel)
    let resp = this.jpSvc.getJobPostingByFilter(this.filterJob);
    resp.subscribe((data)=> this.jobPosting = data);
  }
}
