import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobpostingService } from '../services/jobposting.service';
import { JobdescriptionService } from '../services/jobdescription.service';
import { JobrequirementsService } from '../services/jobrequirements.service';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-searchjobdetail',
  templateUrl: './searchjobdetail.component.html',
  styleUrls: ['./searchjobdetail.component.css']
})
export class SearchjobdetailComponent implements OnInit {

  jobDes: any;
  jobReq: any;
  job: any;
  id: any;
  sum: any;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private jpSvc : JobpostingService,
    private jdSvc : JobdescriptionService,
    private jrSvc : JobrequirementsService,
    private apSvc : ApplicationService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.searchJobId(this.id);
    let respjd = this.jdSvc.getAllJobDescriptionByJobPostingId(this.id);
    respjd.subscribe((datajd)=> this.jobDes = datajd);
    let repsjr = this.jrSvc.getAllJobRequrementByJobPostingId(this.id);
    repsjr.subscribe((datajr)=> this.jobReq = datajr);
    let respsum = this.apSvc.getApplicationCount(this.id);
    respsum.subscribe((datasum)=> this.sum = datasum);
  }

  searchJobId(id: number){
    let response = this.jpSvc.getJobPostingById(id);
    response.subscribe((data)=> this.job = data);
  }

  displayLogin: boolean = false;
  showDialogLogin() {
    this.displayLogin = true;
  }
  cancelDialogLogin(){
    this.displayLogin = false;
  }
  back(){
    this.router.navigateByUrl('/search-job')
  }

}
