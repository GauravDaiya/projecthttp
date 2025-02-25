import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { UserserviceService } from 'src/app/core/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginSrv: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
    console.log(this.loginForm.value);
    this.loginSrv.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value).subscribe((res) => {
      if(res.length) {
        this.router.navigate(['/layout'])
      } else {
        this.loginForm.reset()
      }
    })
  }
}
