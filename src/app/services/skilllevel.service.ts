import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkilllevelService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/skill-level';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllSkillLevel(){
    return this.httpClient.get(this.apiURL)
  }
  public inputSkillLevel(sl){
    return this.httpClient.post(this.apiURL, sl)
  }
  public alterSkillLevel(sl){
    return this.httpClient.put(this.apiURL, sl)
  }
  public getSkillLevelById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
}
