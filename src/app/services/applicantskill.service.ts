import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantskillService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/apl/apl-skill';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllSkill(){
    return this.httpClient.get(this.apiURL)
  }
  public inputSkill(skill){
    return this.httpClient.post(this.apiURL, skill)
  }
  public dropSkill(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterSkill(skill){
    return this.httpClient.put(this.apiURL, skill)
  }
  public getSkillById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
  public getSkillByApplicant(id){
    return this.httpClient.get(this.apiURL+ '/list/'+id)
  }
}
