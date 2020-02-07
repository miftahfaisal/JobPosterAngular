import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  
  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter2/apl/docs';

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllDocument(){
    return this.httpClient.get(this.apiURL)
  }
  public inputDocument(docs){
    return this.httpClient.post(this.apiURL, docs)
  }
  public dropDocument(id){
    return this.httpClient.delete(this.apiURL+ '/'+id)
  }
  public alterDocument(docs){
    return this.httpClient.put(this.apiURL, docs)
  }
  public getDocumentById(id){
    return this.httpClient.get(this.apiURL+ '/id/'+id)
  }
  public getDocumentByApplicant(id){
    return this.httpClient.get(this.apiURL+ '/list/'+id)
  }
  public getCVApplicant(id){
    return this.httpClient.get(this.apiURL +'/cv-applicant/'+ id)
  }
}
