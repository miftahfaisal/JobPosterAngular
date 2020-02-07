import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantprojectService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/apl/apl-proj';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllProject(){
    return this.httpClient.get(this.apiURL)
  }
  public inputProject(proj){
    return this.httpClient.post(this.apiURL, proj)
  }
  public dropProject(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterProject(proj){
    return this.httpClient.put(this.apiURL, proj)
  }
  public getProjectById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
  public getProjectByApplicant(id){
    return this.httpClient.get(this.apiURL+'/list/'+id)
  }
}
