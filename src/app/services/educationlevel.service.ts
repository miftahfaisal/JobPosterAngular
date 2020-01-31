import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationlevelService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/edu-level';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllEduLevel(){
    return this.httpClient.get(this.apiURL)
  }
  public inputEduLevel(el){
    return this.httpClient.post(this.apiURL, el)
  }
  public dropEduLevel(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterEduLevel(el){
    return this.httpClient.put(this.apiURL, el)
  }
  public getEduLevelById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
}
