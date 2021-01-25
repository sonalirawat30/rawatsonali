import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  constructor(public router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  public submit() {
    
    if (this.login.name == 'vipul' && this.login.password == 'vipul') {
      localStorage.setItem("token", "xyz")
      this.toastr.success('Successfully Login');
      this.router.navigate(['/git']);
    } else {
      this.toastr.error('invalid username and password')
      }
      localStorage.clear();
    }
  }
