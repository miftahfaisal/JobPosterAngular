import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationstatechangeService {
  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/application-state-change';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllAplStateChange(){
    return this.httpClient.get(this.apiURL)
  }
  public inputAplStateChange(asc){
    return this.httpClient.post(this.apiURL, asc)
  }
  public dropAplStateChange(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterAplStateChange(asc){
    return this.httpClient.put(this.apiURL, asc)
  }
  public getAplStateChangeById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
}
