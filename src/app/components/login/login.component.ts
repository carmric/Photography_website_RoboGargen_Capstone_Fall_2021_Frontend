import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private formBulider: FormBuilder, private service:UserService, private router:Router) {
    this.loginForm = formBulider.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  // Insert function to check photographer/user info...
  login(){
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;

    if(email === 'carmenricard@gmail.com' && password === 'password'){
      localStorage.setItem('currentUser', JSON.stringify({name: 'Carmen'}));
// Whatever you give to the path in the app-routing file you need to place here.
      this.router.navigate(['/photographer-dashboard']);
    }else{
      alert('Incorrect email or password');
    }
    // 
  }
  // Example 1 - test proj - week6 - NavController

  // Eventually may want to incorporate a function like the one below (from userauth project) to check with the usernames/emails/passwords that are kept in the database for validation. 
    // login(){
    //   let formData = this.loginForm.value;
    //   this.service.login(formData).subscribe((result) => {
    //     localStorage.setItem('currentUser', JSON.stringify(result)); //Storing the data of the currently logged in user on the browser
    //     this.service.userLoggedInEvent.emit(result);
    //     alert('Login successful!');
    //   }, (err) => {
    //     alert('Incorrect email/password');
    //     console.log(err);
    //   });
    // }
  }
