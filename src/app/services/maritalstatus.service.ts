import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaritalstatusService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/marital-status';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllMaritalStatus(){
    return this.httpClient.get(this.apiURL)
  }
  public inputMaritalStatus(ms){
    return this.httpClient.post(this.apiURL, ms)
  }
  public alterMaritalStatus(ms){
    return this.httpClient.put(this.apiURL, ms)
  }
  public getMaritalStatusById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
}
