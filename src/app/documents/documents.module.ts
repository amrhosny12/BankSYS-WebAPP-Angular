import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DocumentsComponent } from '../documents/documents.component';
import { DocumentsRoutingModule } from './documents.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DocumentsComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    DocumentsRoutingModule
    ]
})
export class DocumentsModule { }
