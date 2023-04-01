import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root'
})
export class McquizService {
  constructor(private spinner: NgxSpinnerService) {}

  public hideLoginForm: boolean = false;

  showSpinner(): void {
    this.spinner.show();
  }

  hideSpinner(): void {
    this.spinner.hide();
  }
}
