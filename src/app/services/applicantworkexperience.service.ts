import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantworkexperienceService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/apl/apl-work-exp';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllWorkExp(){
    return this.httpClient.get(this.apiURL)
  }
  public inputWorkExp(we){
    return this.httpClient.post(this.apiURL, we)
  }
  public dropWorkExp(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterWorkExp(we){
    return this.httpClient.put(this.apiURL, we)
  }
  public getWorkExpById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
  public getWorkExpByApplicant(id){
    return this.httpClient.get(this.apiURL + '/list/'+id)
  }
}
