import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobrequirementsService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/job-requirement';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllJobRequirement(){
    return this.httpClient.get(this.apiURL);
  }
  public inputJobRequirement(jr){
    return this.httpClient.post(this.apiURL, jr)
  }
  public dropJobRequirement(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterJobRequirement(jr){
    return this.httpClient.put(this.apiURL, jr)
  }
  public getJobRequirementById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
  public getAllJobRequrementByJobPostingId(id){
    return this.httpClient.get(this.apiURL+ '/list/'+id)
  }
}
