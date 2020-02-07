import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobcategoryService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/job-category';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllJobCategory(){
    return this.httpClient.get(this.apiURL)
  }
  public inputJobCategory(jc){
    return this.httpClient.post(this.apiURL, jc)
  }
  public dropJobCategory(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterJobCategory(jc){
    return this.httpClient.put(this.apiURL, jc)
  }
  public getJobCategoryById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
}
