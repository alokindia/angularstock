import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {LoginService} from 'src/app/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginStatus: any;
  errorMessage: any;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.maxLength(70), Validators.minLength(6)])
  });
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value)
      .subscribe(data => {
        this.loginStatus = data;
        // this.newsApiService.language=this.loginStatus.user.language;
        console.log(this.loginStatus.status);
        if (this.loginStatus.status) {
          if(this.loginStatus.role=="admin")
          {this.router.navigate(['/admin']);}
          else{
          this.router.navigate(['/home']);
          }
        } else if (this.loginStatus.status) {
          this.errorMessage = "User is not verified!";
        }
        else {
          this.errorMessage = this.loginStatus.error;
        }
      },
        error => {
          this.errorMessage = error;
        }
      );
  }

}
