import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2';

  constructor(
    private httpClient : HttpClient
  ) { }

  public applicantApply(apl){
    return this.httpClient.post(this.apiURL + '/apl/application', apl);
  }
  public recruiterMakeInterview(aplId, schedule){
    return this.httpClient.put(this.apiURL +'/admin/application/interview/'+aplId, schedule);
  }
  public applicantRequestReschedule(aplId, apl){
    return this.httpClient.put(this.apiURL +'/admin/application/applicant-request-reschedule/'+ aplId, apl)
  }
  public recruiterHireApplicant(date, time, location, apl){
    return this.httpClient.put(this.apiURL +'/admin/application/hire/'+ date +'/'+ time +'/'+ location, apl);
  }
  public recruiterRejectApplicant(apl){
    return this.httpClient.put(this.apiURL +'/admin/application/reject', apl);
  }
  public recruiterMakeReschedule(schedule){
    return this.httpClient.put(this.apiURL +'/admin/application/interview-reschedule', schedule)
  }
  public getApplicationApplicant(aplId){
    return this.httpClient.get(this.apiURL +'/apl/application/id/'+ aplId);
  }
  public detailApplicationApplicant(aplId){
    return this.httpClient.get(this.apiURL +'/admin/application/detail/'+ aplId);
  }
  public getAllApplication(){
    return this.httpClient.get(this.apiURL +'/admin/application');
  }
  public getApplicationCount(id){
    return this.httpClient.get(this.apiURL +'/admin/application/count/'+id)
  }
  public getApplicantInterview(aplId){
    return this.httpClient.get(this.apiURL +'/apl/application/schedule/'+ aplId);
  }
  public rescheduleRequestByApplicant(schedule){
    return this.httpClient.put(this.apiURL + '/apl/application/applicant-request-reschedule', schedule);
  }
  public rejectByApplicant(apl,reason){
    return this.httpClient.put(this.apiURL + '/apl/application/applicant-reject/'+reason, apl);
  }
  public attendInterview(schedule){
    return this.httpClient.put(this.apiURL + '/apl/application/attend-interview/',schedule);
  }
}
