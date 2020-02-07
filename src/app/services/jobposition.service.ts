import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobpositionService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/job-position';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllJobPosition(){
    return this.httpClient.get(this.apiURL)
  }
  public inputJobPosition(jp){
    return this.httpClient.post(this.apiURL, jp)
  }
  public dropJobPosition(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterJobPosition(jp){
    return this.httpClient.put(this.apiURL, jp)
  }
  public getJobPositionById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
}
