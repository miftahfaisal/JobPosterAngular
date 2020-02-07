import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobpostingService } from 'src/app/services/jobposting.service';
import { JobdescriptionService } from 'src/app/services/jobdescription.service';
import { JobrequirementsService } from 'src/app/services/jobrequirements.service';
import { JobbenefitService } from 'src/app/services/jobbenefit.service';
import { JobRequirement } from 'src/app/models/JobRequirement';
import { JobBenefit } from 'src/app/models/JobBenefit';
import { JobDescription } from 'src/app/models/JobDescription';

@Component({
  selector: 'app-jobpostingedit',
  templateUrl: './jobpostingedit.component.html',
  styleUrls: ['./jobpostingedit.component.css']
})
export class JobpostingeditComponent implements OnInit {

  id: any;
  jobPost: any;
  jobDes: any;
  jobReq: any;
  jobBen: any;
  Obj = {              
    jobDesArr: [], jobReqArr: [], jobBenefitArr: []
  };
  jobDesInput: string;
  jobReqInput: string;
  jobBenInput: string;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private jobPostingService : JobpostingService,
    private jobDesService : JobdescriptionService,
    private jobReqService : JobrequirementsService,
    private jobBenService : JobbenefitService
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.jobPostingService.getJobPostingById(this.id).subscribe((data)=>{
      this.jobPost = data,
      console.log(this.jobPost),
      this.jobDesService.getAllJobDescriptionByJobPostingId(this.id).subscribe((data)=>{
        this.jobDes = data
        for(let jd of this.jobDes){
          this.Obj.jobDesArr.push(jd.jobDescriptionName)
        }
        // console.log(this.Obj.jobDesArr)
        this.displayJobDes()
      }),
      this.jobReqService.getAllJobRequrementByJobPostingId(this.id).subscribe((data)=>{
        this.jobReq = data
        for(let jr of this.jobReq){
          this.Obj.jobReqArr.push(jr.jobRequirementName)
        }
        // console.log(this.Obj.jobReqArr)
        this.displayJobReq()
      })
      this.jobBenService.getAllJobBenefitByJobPostingId(this.id).subscribe((data)=>{
        this.jobBen = data
        for(let jb of this.jobBen){
          this.Obj.jobBenefitArr.push(jb.jobBenefitName)
        }
        // console.log(this.Obj.jobBenefitArr)
        this.displayJobBen()
      })
    });
  }

  addJobDes(){
    this.Obj.jobDesArr.push(this.jobDesInput);
    // console.log(this.Obj.jobDesArr)
    this.displayJobDes()
  }
  dropJobDes(){
    this.Obj.jobDesArr.splice(this.Obj.jobDesArr.length-1, 1)
    this.displayJobDes()
  }
  displayJobDes(){
    var e = "<hr/>";
    for (let jd of this.Obj.jobDesArr){
     e += jd + "<br/>";
    }
    document.getElementById("ResultJobDes").innerHTML = e;
  }

  addJobReq(){
    this.Obj.jobReqArr.push(this.jobReqInput);
    // console.log(this.Obj.jobReqArr)
    this.displayJobReq()
  }
  dropJobReq(){
    this.Obj.jobReqArr.splice(this.Obj.jobReqArr.length-1, 1)
    this.displayJobReq()
  }
  displayJobReq(){
    var e = "<hr/>";
    for (let jd of this.Obj.jobReqArr){
     e += jd + "<br/>";
    }
    document.getElementById("ResultJobReq").innerHTML = e;
  }

  addJobBen(){
    this.Obj.jobBenefitArr.push(this.jobBenInput);
    console.log(this.Obj.jobBenefitArr)
    this.displayJobBen()
  }
  dropJobBen(){
    this.Obj.jobBenefitArr.splice(this.Obj.jobBenefitArr.length-1, 1)
    this.displayJobBen()
  }
  displayJobBen(){
    var e = "<hr/>";
    for (let jb of this.Obj.jobBenefitArr){
     e += jb + "<br/>";
    }
    document.getElementById("ResultJobBen").innerHTML = e;
  }

  addAllJobDes(){
    let jobdes:any = [];
    let jds:any = new JobDescription(null,null);
    for(let jd of this.Obj.jobDesArr){
      jds= new JobDescription(null,null);
      jds.jobDescriptionName = jd;
      jds.jobPosting = this.jobPost;
      jobdes.push(jds)
    }
    console.log(jobdes);
    this.jobDesService.alterJobDescription(jobdes).subscribe((data)=>{})
  }
  addAllJobReq(){
    let jobreq : any = [];
    let jrq: any = new JobRequirement(null,null)
    for(let jr of this.Obj.jobReqArr){
      jrq = new JobRequirement(null,null)
      jrq.jobRequirementName = jr
      jrq.jobPosting = this.jobPost
      jobreq.push(jrq)
    }
    console.log(jobreq)
    this.jobReqService.alterJobRequirement(jobreq).subscribe((data)=>{})
  }
  addAllJobBen(){
    let jobben : any = [];
    let jbn: any = new JobBenefit(null,null)
    for(let jb of this.Obj.jobBenefitArr){
      jbn = new JobBenefit(null,null)
      jbn.jobBenefitName = jb
      jbn.jobPosting = this.jobPost
      jobben.push(jbn)
    }
    console.log(jobben)
    this.jobBenService.alterJobBenefit(jobben).subscribe((data)=>{})
  }

  backToDetail(id){
    this.jobPostingService.getJobPostingById(id).subscribe((data)=>{
      this.router.navigateByUrl('/recruiter/job-posting/detail/'+id);
    })
  }

  updateJobPosting(){
    this.addAllJobDes()
    this.addAllJobReq()
    this.addAllJobBen()
    this.jobPostingService.alterJobPosting(this.id, this.jobPost).subscribe((data)=>{
      location.href = '/recruiter/job-posting/detail'+this.id
    })
  }

}
