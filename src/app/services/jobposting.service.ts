import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobpostingService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2';

  constructor(
    private httpClient : HttpClient
  ) { }
    
  public getAllJobPosting(){
    return this.httpClient.get(this.apiURL+'/apl/job-posting');
  }
  public inputJobPosting(jp){
    return this.httpClient.post(this.apiURL +'/admin/job-posting', jp)
  }
  public dropJobPosting(id){
    return this.httpClient.delete(this.apiURL+ '/admin/job-posting/'+id)
  }
  public alterJobPosting(id, jp){
    return this.httpClient.put(this.apiURL+ '/admin/job-posting/'+id, jp)
  }
  public getJobPostingById(id){
    return this.httpClient.get(this.apiURL+ '/apl/job-posting/id/'+id)
  }
  public getJobPostingByRecruiter(id){
    return this.httpClient.get(this.apiURL +'/admin/job-posting/list/'+ id)
  }
  public getJobPostingByFilter(filter){
    return this.httpClient.post(this.apiURL +'/apl/job-posting/filter', filter)
  }
  public closeJobPosting(jp){
    return this.httpClient.put(this.apiURL +'/admin/job-posting/close',jp)
  }
}
