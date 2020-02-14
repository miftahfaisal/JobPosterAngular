import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobpostingService } from 'src/app/services/jobposting.service';
import { JobdescriptionService } from 'src/app/services/jobdescription.service';
import { JobrequirementsService } from 'src/app/services/jobrequirements.service';
import { ApplicationstatechangeService } from 'src/app/services/applicationstatechange.service';
import { ApplicationService } from 'src/app/services/application.service';
import { ApplicanteducationService } from 'src/app/services/applicanteducation.service';
import { ApplicantworkexperienceService } from 'src/app/services/applicantworkexperience.service';
import { ApplicantskillService } from 'src/app/services/applicantskill.service';
import { InterviewSchedule } from 'src/app/models/InterviewSchedule';
import { JobbenefitService } from 'src/app/services/jobbenefit.service';
import { InterviewtestscheduleService } from 'src/app/services/interviewtestschedule.service';
import { DocumentService } from 'src/app/services/document.service';
import { ReportInput } from 'src/app/models/ReportInput';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-jobpostingdetail',
  templateUrl: './jobpostingdetail.component.html',
  styleUrls: ['./jobpostingdetail.component.css']
})
export class JobpostingdetailComponent implements OnInit {

  jobPost: any;
  id: any;
  idUser: any;
  documentData: any;
  jobDes: any;
  jobReq: any;
  jobBen: any;
  applicants: any;
  applicantInterview: any;
  applicantHire: any;
  apldetail: any;
  aplEdu: any;
  aplWE: any;
  aplSkill: any;
  applicationjob: any;
  idApplication: any;
  interviewTestScheduleModel: any;
  interviewTestRescheduleModel: any;
  interviewSchedule: Date;
  interDate: any;
  interHour: any;
  interviewLocation: any;
  hireSchedule: Date;
  applicantApplicationtoHire: any;
  hireDate: any;
  hireHour: any;
  hireLocation: string;
  interviewReschedule: Date;
  resDate: any;
  resHour: any;

  reportModel: ReportInput;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private jobPostingService : JobpostingService,
    private jobDesService : JobdescriptionService,
    private jobReqService : JobrequirementsService,
    private jobBenService : JobbenefitService,
    private aplStateChgService : ApplicationstatechangeService,
    private appInterviewService : InterviewtestscheduleService,
    private application : ApplicationService,
    private aplEduService : ApplicanteducationService,
    private aplWEService : ApplicantworkexperienceService,
    private aplSkillService : ApplicantskillService,
    private interviewTestScheduleService : InterviewtestscheduleService,
    private documentService : DocumentService,
    private userService: UserService
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.jobPostingService.getJobPostingById(this.id).subscribe((data)=>{
      this.jobPost = data,
      this.jobDesService.getAllJobDescriptionByJobPostingId(this.id).subscribe((datajd)=> this.jobDes = datajd),
      this.jobReqService.getAllJobRequrementByJobPostingId(this.id).subscribe((datajr)=> this.jobReq = datajr),
      this.jobBenService.getAllJobBenefitByJobPostingId(this.id).subscribe((data)=> {this.jobBen = data, console.log(this.jobBen)}),
      this.aplStateChgService.getListApplicationByJob(this.id).subscribe((data)=> this.applicants = data),
      this.aplStateChgService.getListApplicantHireByJob(this.id).subscribe((data)=>{
         this.applicantHire = data,
         console.log(this.applicantHire)
        }),
      this.appInterviewService.getApplicantInterviewListByJob(this.id).subscribe((data)=> {this.applicantInterview = data})
    });
  }

  closeJobPosting(){
    this.jobPostingService.closeJobPosting(this.jobPost).subscribe((data)=>{
      alert('Job has been closed')
      location.href = '/recruiter/job-posting/detail/'+this.id
    })
  }

  updateJobPosting(id){
    this.jobPostingService.getJobPostingById(id).subscribe((data)=>{
      this.router.navigateByUrl('/recruiter/job-posting/edit/'+id);
    })
  }

  rejectApplicant(){
    console.log(this.interviewTestScheduleModel)
    this.application.recruiterRejectApplicant(this.interviewTestScheduleModel).subscribe((data)=>{
      alert('Applicant Rejected!')
      location.href = 'recruiter/job-posting/detail/'+this.id
    })
  }

  parsingDateTimeHire(){
    let bulan = this.hireSchedule.getMonth() < 10 ? '0'+this.hireSchedule.getMonth() : this.hireSchedule.getMonth();
    let tanggal = this.hireSchedule.getDate() < 10 ? '0'+this.hireSchedule.getDate() : this.hireSchedule.getDate();
    this.hireDate = this.hireSchedule.getFullYear() +"-"+ bulan +"-"+ tanggal;
    // console.log(this.hireDate)
    let jam = this.hireSchedule.getHours() < 10 ? '0'+this.hireSchedule.getHours() : this.hireSchedule.getHours();
    let menit = this.hireSchedule.getMinutes() < 10 ? '0'+this.hireSchedule.getMinutes() : this.hireSchedule.getMinutes();
    this.hireHour = jam +':'+ menit +':00'
    // console.log(this.hireHour)
  }
  hireApplicant(){
    this.parsingDateTimeHire()
    this.application.recruiterHireApplicant(this.hireDate, this.hireHour, this.hireLocation, this.applicantApplicationtoHire).subscribe((data)=>{
      alert('Applicant have been hired!')
      location.href = 'recruiter/job-posting/detail/'+this.id
    })
  }

  parsingDateTimeInterview(){
    let bulan = this.interviewSchedule.getMonth() < 10 ? '0'+this.interviewSchedule.getMonth() : this.interviewSchedule.getMonth();
    let tanggal = this.interviewSchedule.getDate() < 10 ? '0'+this.interviewSchedule.getDate() : this.interviewSchedule.getDate();
    this.interDate = this.interviewSchedule.getFullYear() +"-"+ bulan +"-"+ tanggal;
    // console.log(this.interDate)
    let jam = this.interviewSchedule.getHours() < 10 ? '0'+this.interviewSchedule.getHours() : this.interviewSchedule.getHours();
    let menit = this.interviewSchedule.getMinutes() < 10 ? '0'+this.interviewSchedule.getMinutes() : this.interviewSchedule.getMinutes();
    this.interHour = jam +':'+ menit +':00'
    // console.log(this.interHour)
  }
  sendInviteApplicant(){
    this.parsingDateTimeInterview();
    let interviewScheduleInvite: InterviewSchedule = new InterviewSchedule(this.interDate, this.interHour, this.interviewLocation)
    this.application.recruiterMakeInterview(this.idApplication, interviewScheduleInvite).subscribe((data)=>{
      alert('Invite applicant success!')
      location.href = 'recruiter/job-posting/detail/'+this.id
    }) 
  }

  parsingDateTimeReschedule(){
    let bulan = this.interviewReschedule.getMonth() < 10 ? '0'+this.interviewReschedule.getMonth() : this.interviewReschedule.getMonth();
    let tanggal = this.interviewReschedule.getDate() < 10 ? '0'+this.interviewReschedule.getDate() : this.interviewReschedule.getDate();
    this.resDate = this.interviewReschedule.getFullYear() +"-"+ bulan +"-"+ tanggal;
    // console.log(this.resDate)
    let jam = this.interviewReschedule.getHours() < 10 ? '0'+this.interviewReschedule.getHours() : this.interviewReschedule.getHours();
    let menit = this.interviewReschedule.getMinutes() < 10 ? '0'+this.interviewReschedule.getMinutes() : this.interviewReschedule.getMinutes();
    this.resHour = jam +':'+ menit +':00'
    // console.log(this.resHour)
  }
  sendReschedule(){
    // this.parsingDateTimeReschedule();
    this.application.recruiterMakeReschedule(this.interviewTestRescheduleModel).subscribe((data)=>{
      alert('Reschedule applicant success!')
      location.href = 'recruiter/job-posting/detail/'+this.id
    })
  }

  downloadReport(id){
    this.reportModel = new ReportInput(null,null,null);
    this.reportModel.setJob(id);
    this.reportModel.setRecruiter(null);
    this.reportModel.setYear(null);
    this.userService.getReport(this.reportModel).subscribe((data)=>{});
  }

  //method untuk pop-up dialog dan sidebar
  displayCloseJobPosting: boolean = false;
  showDialogCloseJobPosting(){
    this.displayCloseJobPosting = true;
  }
  cancelDialogCloseJobPosting(){
    this.displayCloseJobPosting = false;
  }

  displayDetailApp : boolean = false;
  showDialogDetailApplicant(id){
    this.displayDetailApp = true;
    this.aplStateChgService.getAplStateChangeById(id).subscribe((data)=>{
      this.apldetail = data,
      this.idUser = this.apldetail.application.user.id,
      this.applicationjob = this.apldetail.application,
      this.idApplication = this.applicationjob.id,
      this.application.detailApplicationApplicant(this.apldetail.application.id).subscribe((data)=>{}),
      this.aplEduService.getEducationByApplicant(this.apldetail.application.user.id).subscribe((data)=>{
        this.aplEdu = data
      })
      this.aplWEService.getWorkExpByApplicant(this.apldetail.application.user.id).subscribe((data)=>{
        this.aplWE = data
      })
      this.aplSkillService.getSkillByApplicant(this.apldetail.application.user.id).subscribe((data)=>{
        this.aplSkill = data
      })
      this.documentService.getCVApplicant(this.idUser).subscribe((data)=>{
        console.log(data)
        let file:any = data;
        this.documentData = 'data:' +file.fileType+';base64,'+file.file
      })
    })
  }
  cancelDialogDetailApplicant(){
    this.displayDetailApp = false;
  }

  displayResume: boolean = false;
  showDialogResume(){
    this.displayResume = true
  }

  displayInterviewResult: boolean = false;
  showDialogInterviewResult(idITS){
    this.interviewTestScheduleService.getInterviewTestScheduleById(idITS).subscribe((data)=>{
      this.interviewTestScheduleModel = data
    })
    this.displayInterviewResult = true;
  }
  cancelDialogInterviewResult(){
    this.displayInterviewResult = false
  }

  displayRejectReason: boolean = false;
  showDialogRejectReason(idITS){
    this.interviewTestScheduleService.getInterviewTestScheduleById(idITS).subscribe((data)=>{
      this.interviewTestScheduleModel = data
    })
    this.displayRejectReason = true;
  }
  cancelDialogRejectReason(){
    this.displayRejectReason = false
  }

  displayHireApplicant: boolean = false;
  showDialogHireApplicant(idITS){
    this.interviewTestScheduleService.getInterviewTestScheduleById(idITS).subscribe((data)=>{
      this.interviewTestScheduleModel = data,
      this.applicantApplicationtoHire = this.interviewTestScheduleModel.application
    })
    this.displayHireApplicant = true
  }
  cancelDialogHireApplicant(){
    this.displayHireApplicant = false
  }

  displayInviteApplicant: boolean = false;
  showDialogInviteApplicant(){
    this.displayInviteApplicant = true;
  }
  cancelDialogInviteApplicant(){
    this.displayInviteApplicant = false;
  }

  displayReschedule: boolean = false;
  showDialogReschedule(idITS){
    this.interviewTestScheduleService.getInterviewTestScheduleById(idITS).subscribe((data)=>{
      this.interviewTestRescheduleModel = data
    })
    this.displayReschedule = true;
  }
  cancelDialogReschedule(){
    this.displayReschedule = false;
  }
}
