import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { LoginInfo } from './loginInfo';

@Component({
  selector: 'pro-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }
  
  logininfo: LoginInfo = new LoginInfo(); //
  loginForm!: FormGroup;

  ngOnInit(): void {

    // this.loginForm = new FormGroup({
    //   email: new FormControl('admin@gmail.com'),
    //   password: new FormControl(),
    //   rememberme: new FormControl(true),
    // });

    this.loginForm = this._fb.group({
      email: '',
      password: '',
      rememberme: true
    })

    this.loginForm.get('email')?.valueChanges.subscribe(value => {
        console.log(value); // Often need to unsubscribe
    });
    // this.loginForm.valueChanges.subscribe(value => {
    //   console.log(value); // Often need to unsubscribe
    // });

  }

  // Template driven form
  // sendFormData(form: NgForm){
  //   // this.logininfo = form.value;
  //   // console.log(this.logininfo);
  // }
  // ------------------------------------------------------
  // Reactive Form
  sendFormData(){
    console.log(this.loginForm);
    console.log(this.loginForm.value);
  }

  fillData() {
    this.loginForm.setValue({
      email: 'admin@hotmail.com',
      password: 'admin123',
      rememberme: false
    });
  }

  
}
