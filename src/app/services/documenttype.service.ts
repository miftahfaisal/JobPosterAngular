import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumenttypeService {

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/admin/doc-type';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllDocumentType(){
    return this.httpClient.get(this.apiURL)
  }
  public inputDocumentType(dt){
    return this.httpClient.post(this.apiURL, dt)
  }
  public dropDocumentType(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterDocumentType(dt){
    return this.httpClient.put(this.apiURL, dt)
  }
  public getDocumentTypeById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
  public getDocumentTypeByCode(code){
    return this.httpClient.get(this.apiURL+ '/code/'+code)
  }
}
