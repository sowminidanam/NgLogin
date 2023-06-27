import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl ="http://localhost:3000/user"
  constructor( private http: HttpClient) { }

  GetAll(){
    return this.http.get(this.apiUrl)
  }

  GetByCode(code:any){
    return this.http.get(this.apiUrl + '/' + code)
  }
 
  Proceedregister(inputdata:any){
    return this.http.post(this.apiUrl, inputdata)
  }

  Updateuser(code: any ,inputdata:any){
    return this.http.put(this.apiUrl + '/'+ code, inputdata)
  }

  IsLoggedIn(){
    return localStorage.getItem('username')!=null
  }
  
  GetUserrole(){
    return localStorage.getItem('userrole')!=null?localStorage.getItem('userrole')?.toString():'';
  }
}
