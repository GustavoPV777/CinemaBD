import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdInputModule, 
         MdCheckboxModule } from '@angular/material';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdCheckboxModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
