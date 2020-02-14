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
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { JobPostingPojo } from 'src/app/models/JobPostingPojo';
import { JobRequirement } from 'src/app/models/JobRequirement';
import { JobBenefit } from 'src/app/models/JobBenefit';
import { JobbenefitService } from 'src/app/services/jobbenefit.service';
import { PasswordPojo } from 'src/app/models/PasswordPojo';
import { MessageService } from 'primeng/api';
import { ReportInput } from 'src/app/models/ReportInput';

@Component({
  selector: 'app-jobposting',
  templateUrl: './jobposting.component.html',
  styleUrls: ['./jobposting.component.css']
})
export class JobpostingComponent implements OnInit {

  user: any;
  jobPosting: any;
  jobPost: JobPostingPojo = new JobPostingPojo("","","","","",0,null,null,"",0);
  jp: any;
  deskripsi: string;
  province: any;
  city: any;
  cityModel: any;
  jobPosition: any;
  jobPositionModel: any;
  Obj = {              
    jobDesArr: [], jobReqArr: [], jobBenefitArr: []
  };
  jobDesInput: string;
  jobReqInput: string;
  jobBenInput: string;
  passwordPojo: PasswordPojo = new PasswordPojo(null,null,null);
  reportModel: ReportInput;
  year:any;

  constructor(
    private router : Router,
    private jobPostingService : JobpostingService,
    private provinceService : ProvinceService,
    private cityService : CityService,
    private jobPositionService : JobpositionService,
    private jobDesService : JobdescriptionService,
    private jobReqService : JobrequirementsService,
    private jobBenService : JobbenefitService,
    private auth : AuthService,
    private userService : UserService,
    private messageService: MessageService
  ){}

  ngOnInit() {
    this.user = JSON.parse(this.auth.getUser())
    if(this.user!=null){
      this.passwordPojo.setId(this.user.id);
    }else{
      this.router.navigateByUrl('/')
    }
    
    this.jobPostingService.getJobPostingByRecruiter(this.user.id).subscribe((data)=>{
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

  // method untuk hit API backend
  detailJob(id){
    this.jobPostingService.getJobPostingById(id).subscribe((data)=>{
      this.jobPosting = data;
      this.router.navigateByUrl('/recruiter/job-posting/detail/'+id);
    })
  }

  addNewJobPost(){
    this.jobPost.setUserId(this.user.id)
    this.jobPost.setCityId(this.cityModel.id)
    this.jobPost.setJobPositionId(this.jobPositionModel.id)
    this.jobPostingService.inputJobPosting(this.jobPost).subscribe((data)=>{
      this.jp = data,
      this.addAllJobDes(),
      this.addAllJobReq(),
      this.addAllJobBen(),
      location.href = '/recruiter/job-posting'
    })
  }
  addAllJobDes(){
    let jobdes:any = [];
    let jds:any = new JobDescription(null,null);
    for(let jd of this.Obj.jobDesArr){
      jds= new JobDescription(null,null);
      jds.jobDescriptionName = jd;
      jds.jobPosting = this.jp;
      jobdes.push(jds)
    }
    console.log(jobdes);
    this.jobDesService.inputJobDescription(jobdes).subscribe((data)=>{})
  }
  addAllJobReq(){
    let jobreq : any = [];
    let jrq: any = new JobRequirement(null,null)
    for(let jr of this.Obj.jobReqArr){
      jrq = new JobRequirement(null,null)
      jrq.jobRequirementName = jr
      jrq.jobPosting = this.jp
      jobreq.push(jrq)
    }
    console.log(jobreq)
    this.jobReqService.inputJobRequirement(jobreq).subscribe((data)=>{})
  }
  addAllJobBen(){
    let jobben : any = [];
    let jbn: any = new JobBenefit(null,null)
    for(let jb of this.Obj.jobBenefitArr){
      jbn = new JobBenefit(null,null)
      jbn.jobBenefitName = jb
      jbn.jobPosting = this.jp
      jobben.push(jbn)
    }
    console.log(jobben)
    this.jobBenService.inputJobBenefit(jobben).subscribe((data)=>{})
  }

  downloadReport(){
    console.log(this.user.id)
    this.reportModel = new ReportInput(null,null,null);
    this.reportModel.setRecruiter(this.user.id);
    this.reportModel.setYear(this.year);
    this.reportModel.setJob(null);
    this.userService.getReport(this.reportModel).subscribe(
      (data)=>{},
      (error)=>{alert('Report tidak ada')})
  }

  changePassword(){
    this.userService.changePassword(this.passwordPojo).subscribe(
      (data)=>{
        this.messageService.add({key:'success', severity:'success', summary:'Message', detail:'Password successfully changed'})
      },
      (error)=>{
        this.messageService.add({key:'error', severity:'error', summary:'Message', detail: error.error});
      }
    )
  }

  onConfirm(){
    this.messageService.clear('success');
    this.logOut();
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

  displayDownloadReport: boolean = false;
  showDialogDownloadReport(){
    this.sidebarAccount = false;
    this.displayDownloadReport = true;
  }
  cancelDialogDownloadReport(){
    this.displayDownloadReport = false;
  }

  displayChangePassword: boolean = false
  showDialogChangePassword(){
    this.displayChangePassword = true
    this.sidebarAccount = false
  }
  cancelDialogChangePassword(){
    this.displayChangePassword = false
  }

  sidebarAccount: boolean = false;
  sidebarAccountActive(){
    this.sidebarAccount = true;
  }
  sidebarAccountInactive(){
    this.sidebarAccount = false;
  }
  logOut(){
    this.auth.logout()
  }
}
