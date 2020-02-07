import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobbenefitService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/job-benefit';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllJobBenefit(){
    return this.httpClient.get(this.apiURL);
  }
  public inputJobBenefit(jb){
    return this.httpClient.post(this.apiURL, jb)
  }
  public dropJobBenefit(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterJobBenefit(jb){
    return this.httpClient.put(this.apiURL, jb)
  }
  public getJobBenefitById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
  public getAllJobBenefitByJobPostingId(id){
    return this.httpClient.get(this.apiURL+ '/list/'+id)
  }
}
