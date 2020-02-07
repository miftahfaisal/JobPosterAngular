import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/major';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllMajor(){
    return this.httpClient.get(this.apiURL)
  }
  public inputMajor(m){
    return this.httpClient.post(this.apiURL, m)
  }
  public alterMajor(m){
    return this.httpClient.put(this.apiURL, m)
  }
  public getMajorById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
  public getMajorByEduLevel(id){
    return this.httpClient.get(this.apiURL +'/edu-level/'+ id)
  }
}
