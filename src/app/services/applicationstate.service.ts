import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationstateService {
  
  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/application-state';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllAplState(){
    return this.httpClient.get(this.apiURL)
  }
  public inputAplState(as){
    return this.httpClient.post(this.apiURL, as)
  }
  public dropAplState(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterAplState(as){
    return this.httpClient.put(this.apiURL, as)
  }
  public getAplStateById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
}
