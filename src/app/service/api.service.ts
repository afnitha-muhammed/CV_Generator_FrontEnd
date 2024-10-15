import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  addcvapi(reqbody:any){
    return this.http.post(`${this.serverUrl}/cv`,reqbody)
  }

  getAllUsersApi(){
    return this.http.get(`${this.serverUrl}/cv`)
  }

  getUserApi(id:any){
    return this.http.get(`${this.serverUrl}/cv/${id}`)
  }

  updateUserApi(id:any, reqbody:any){
    return this.http.put(`${this.serverUrl}/cv/${id}`,reqbody)
  }

}
