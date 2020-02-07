import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/city';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllCity(){
    return this.httpClient.get(this.apiURL)
  }
  public inputCity(city){
    return this.httpClient.post(this.apiURL, city)
  }
  public alterCity(city){
    return this.httpClient.put(this.apiURL, city)
  }
  public getCityById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
}
