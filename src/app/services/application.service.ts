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
  public recruiterMakeInterview(aplId, date, time, apl){
    return this.httpClient.put(this.apiURL +'/admin/application/interview/'+aplId+'/'+date+'/'+time, apl);
  }
  public recruiterHireApplicant(aplId, apl){
    return this.httpClient.put(this.apiURL +'/admin/application/hire/'+ aplId, apl);
  }
  public recruiterRejectApplicant(aplId, apl){
    return this.httpClient.put(this.apiURL +'/admin/application/reject/'+ aplId, apl);
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
  
}
