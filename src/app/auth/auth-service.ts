import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/login.php';
  constructor(private http: HttpClient){}

  login(username: string, password: string){
    return this.http.post<any>(this.apiUrl, {username, password})
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }
}
