import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReligionService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/religion';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllReligion(){
    return this.httpClient.get(this.apiURL)
  }
  public inputReligion(r){
    return this.httpClient.post(this.apiURL, r)
  }
  public alterReligion(r){
    return this.httpClient.put(this.apiURL, r)
  }
  public getReligionById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
}
