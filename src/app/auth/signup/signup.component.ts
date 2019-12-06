import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnDestroy {
  error: string = null;
  isLoading = false;
  subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const username = form.value.username;
    const password = form.value.password;
    const email = form.value.email;
    const phone = form.value.phone;
    this.isLoading = true;
    this.subscription = this.authService.signup(username, password, email, phone).subscribe(
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
