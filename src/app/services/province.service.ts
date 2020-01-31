import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/province';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllProvince(){
    return this.httpClient.get(this.apiURL)
  }
  public inputProvince(province){
    return this.httpClient.post(this.apiURL, province)
  }
  public alterProvince(province){
    return this.httpClient.put(this.apiURL, province)
  }
  public getProvinceById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
}
