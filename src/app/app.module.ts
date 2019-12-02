import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { AccountItemComponent } from './accounts/account-list/account-item/account-item.component';
import { AccountDetailComponent } from './accounts/account-detail/account-detail.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FourDigitPipe } from './pipes/four-digit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AccountListComponent,
    AccountItemComponent,
    AccountDetailComponent,
    AuthComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    LoginComponent,
    SignupComponent,
    FourDigitPipe
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
