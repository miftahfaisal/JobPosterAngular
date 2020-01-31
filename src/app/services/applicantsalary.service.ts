import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsalaryService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/apl/apl-salary';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllSalary(){
    return this.httpClient.get(this.apiURL)
  }
  public inputSalary(salary){
    return this.httpClient.post(this.apiURL, salary)
  }
  public dropSalary(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterSalary(salary){
    return this.httpClient.put(this.apiURL, salary)
  }
  public getSalaryById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
}
