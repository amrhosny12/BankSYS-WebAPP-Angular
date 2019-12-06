import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { TransfersComponent } from './transfers/transfers.component';
import { BillsComponent } from './bills/bills.component';
import { DocumentsComponent } from './documents/documents.component';
import { AccountAddComponent } from './accounts/account-add/account-add.component';
import { FourDigitPipe } from './pipes/four-digit.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AccountListComponent,
    AccountItemComponent,
    AccountDetailComponent,
    AccountAddComponent,
    AuthComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    LoginComponent,
    SignupComponent,
    FourDigitPipe,
    TransfersComponent,
    BillsComponent,
    DocumentsComponent,
    FooterComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, NgbModule, AppRoutingModule],
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
