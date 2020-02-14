import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/user';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllUser(){
    return this.httpClient.get(this.apiURL)
  }
  public registerUser(userRegis){
    return this.httpClient.post(this.apiURL +'/register', userRegis)
  }
  public makeUserToken(authReq){
    return this.httpClient.post(this.apiURL +'/login', authReq)
  }
  public alterUser(user){
    return this.httpClient.put(this.apiURL, user)
  }
  public getUserById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
  public inputUserPicture(id, upload){
    return this.httpClient.put(this.apiURL +'/upload/'+ id, upload)
  }
  public inputUserDocument(id, path, upload){
    return this.httpClient.post(this.apiURL +'/upload/'+ id +'/'+ path, upload)
  }
  public getReport(id){
    return this.httpClient.post(this.apiURL +'/report', id)
  }
  public changePassword(pasPojo){
    return this.httpClient.put(this.apiURL + '/change-password',pasPojo);
  }
}
