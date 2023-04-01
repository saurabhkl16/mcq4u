import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { PortalComponent } from './components/portal/portal.component';
import { SignupComponent } from './components/signup/signup.component';
import { McquizService } from './mcquiz.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { JavascriptComponent } from './quiz/javascript/javascript.component';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'portal', component: PortalComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'about', component: AboutComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PortalComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    JavascriptComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [McquizService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
