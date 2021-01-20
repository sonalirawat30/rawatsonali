import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login = {
    name: '',
    password: ''
  }
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  public submit() {
    
    if (this.login.name == 'sonali' && this.login.password == 'son123wyz') {
      localStorage.setItem("token", "xyz")
      this.router.navigate(['home'])
    } else {
      alert("please enter valid credentials")
      localStorage.clear();
    }
  }
}
