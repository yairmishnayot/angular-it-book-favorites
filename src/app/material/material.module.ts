import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MaterialModule { }
