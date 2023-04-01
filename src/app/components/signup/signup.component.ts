import { Component, ViewChild } from '@angular/core';
import { McquizService } from 'src/app/mcquiz.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: 'signup.template.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  @ViewChild('signupForm', { static: false }) form: any;

  public email: any = '';
  public firstName: any = '';
  public lastName: any = '';
  public mobNumber: any = '';
  public passWord: any = '';
  public cnfPassword: any = '';
  public hideSignupForm: boolean = false;

  constructor(
    private mcquizService: McquizService,
    protected toastrService: ToastrService,
    private router: Router
  ) {}

  public hideSignup() {
    this.hideSignupForm = true;
  }

  public setUserDeatils(userDetails: any) {
    this.toastrService.success('Hello world!', 'Toastr fun!');
    if (this.form.valid) {
      console.log(userDetails);
      this.router.navigate(['/portal']);
    } else {
      window.alert('Please fill all fields');
    }
  }
}
