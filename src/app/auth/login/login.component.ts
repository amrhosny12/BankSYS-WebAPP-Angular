import {Component, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  error: string = null;
  isLoading = false;
  subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    // let authObs: Observable<AuthResponseData>;
    const username = form.value.username;
    const password = form.value.password;
    this.isLoading = true;
    this.subscription = this.authService.login(username, password).subscribe(
      resData => {
        this.router.navigate(['/accounts']);
        this.isLoading = false;
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    form.reset();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
