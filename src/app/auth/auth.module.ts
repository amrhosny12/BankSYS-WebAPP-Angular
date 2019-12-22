import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({

    declarations: [
        AuthComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule,
        RouterModule.forChild( [
            { path: '', component: AuthComponent }
        ])
    ]
})
export class AuthModule {}
