import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Userclass}from './userclass';
@Injectable()
export class UserService {
  private userclass:Userclass;
private baseUri:string="http://localhost:8080";
private headers=new HttpHeaders().set('Content-Type','application/json');
  constructor(private _http:HttpClient) { }
createUser(userclass:Userclass){
  return this._http.post(this.baseUri+'/create',userclass,{headers:this.headers});
}
readUser(){
  return this._http.get(this.baseUri+'/read',{headers:this.headers});
}
updateUser(userclass:Userclass){
  return this._http.put(this.baseUri+'/update',userclass,{headers:this.headers});
}
deleteUser(id:string){
  return this._http.post(this.baseUri+'/delete/'+id,{headers:this.headers});
}
setter(userclass:Userclass){
  this.userclass=userclass;
}
getter(){
  return this.userclass;
}
  register(body:any){
    return this._http.post('http://127.0.0.1:3300/users/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  login(body:any){
    return this._http.post('http://127.0.0.1:3300/users/login',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  user(){
    return this._http.get('http://127.0.0.1:3300/users/user',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  logout(){
    return this._http.get('http://127.0.0.1:3300/users/logout',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

}
