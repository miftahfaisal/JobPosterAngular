import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApplicanteducationService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/apl/apl-edu';

  constructor(
    private httpClient : HttpClient
    ) { }

  public getAllEducation(){
    return this.httpClient.get(this.apiURL)
  }
  public inputEducation(edu){
    return this.httpClient.post(this.apiURL, edu)
  }
  public dropEducation(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterEducation(edu){
    return this.httpClient.put(this.apiURL, edu)
  }
  public getEducationById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
  public getEducationByApplicant(id){
    return this.httpClient.get(this.apiURL+'/list/'+id)
  }
}
