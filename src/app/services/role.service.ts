import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/role';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllRole(){
    return this.httpClient.get(this.apiURL)
  }
  public inputRole(role){
    return this.httpClient.post(this.apiURL, role)
  }
  public alterRole(role){
    return this.httpClient.put(this.apiURL, role)
  }
  public getRoleById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
  public getRoleByName(name){
    return this.httpClient.get(this.apiURL +'/name/'+ name)
  }
}
