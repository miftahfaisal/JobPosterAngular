import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobdescriptionService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/job-description';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllJobDescription(){
    return this.httpClient.get(this.apiURL);
  }
  public inputJobDescription(jd){
    return this.httpClient.post(this.apiURL, jd)
  }
  public dropJobDescription(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterJobDescription(jd){
    return this.httpClient.put(this.apiURL, jd)
  }
  public getJobDescriptionById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
  public getAllJobDescriptionByJobPostingId(id){
    return this.httpClient.get(this.apiURL+ '/list/'+id)
  }
}
