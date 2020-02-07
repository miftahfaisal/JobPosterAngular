import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterviewtestscheduleService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/schedule';

  constructor(
    private httpClient : HttpClient
  ) { }

  public inputInterviewTestSchedule(its){
    return this.httpClient.post(this.apiURL, its)
  }
  public dropInterviewTestSchedule(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterInterviewTestSchedule(its){
    return this.httpClient.put(this.apiURL, its)
  }
  public getInterviewTestScheduleById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
  public getListScheduleByApplicant(id){
    return this.httpClient.get(this.apiURL + '/schedule-per-applicant/'+id)
  }
  public getRescheduleListByJob(id){
    return this.httpClient.get(this.apiURL + '/reschedule-list-per-job/'+id)
  }
  public getApplicantInterviewListByJob(id){
    return this.httpClient.get(this.apiURL + '/schedule-per-job/'+id)
  }
}
