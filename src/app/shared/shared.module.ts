import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { DefaultModalComponent } from './components/default-modal/default-modal.component';

@NgModule({
  declarations: [DefaultModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    TooltipModule,
    DefaultModalComponent
  ]
})
export class SharedModule { }
