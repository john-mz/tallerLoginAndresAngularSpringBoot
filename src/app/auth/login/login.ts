import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth-service';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  username = "";
  password = "";
  // constructor(private authService: AuthService, private router: Router){}

  login(){
    // this.authService.login(this.username, this.password).subscribe(res => {
    //   if (res.success){
    //     localStorage.setItem('token', res.token);
    //     this.router.navigate(['/']);
    //   }else {
    //     alert('credencias invalidas');
    //   }
    // })
  }
}
