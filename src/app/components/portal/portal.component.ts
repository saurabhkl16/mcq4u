import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { McquizService } from 'src/app/mcquiz.service';

@Component({
  selector: 'portal',
  templateUrl: 'portal.template.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent {
  @ViewChild('loginForm', { static: false }) form: any;

  public username: any = '';
  public password: any = '';
  public hideLoginForm: boolean = false;

  constructor(private mcquizService: McquizService, private router: Router) {}

  ngOnInit() {
    this.mcquizService.showSpinner();
    setTimeout(() => {
      this.mcquizService.hideSpinner();
    }, 500);
  }

  public hidePortal() {
    this.hideLoginForm = true;
  }

  public showGuestPage() {
    this.hideLoginForm = true;
    this.router.navigate(['/homepage']);
  }

  onSubmit(data: any) {
    if (this.form.valid) console.log(data);
  }
}
