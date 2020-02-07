import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoblevelService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/job-level';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllJobLevel(){
    return this.httpClient.get(this.apiURL)
  }
  public inputJobLevel(jl){
    return this.httpClient.post(this.apiURL, jl)
  }
  public dropJobLevel(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterJobLevel(jl){
    return this.httpClient.put(this.apiURL, jl)
  }
  public getJobLevelById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
}
