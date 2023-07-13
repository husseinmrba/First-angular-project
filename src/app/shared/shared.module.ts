import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRattingComponent } from './star-ratting/star-ratting.component';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarRattingComponent,
    ConvertToSpacePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StarRattingComponent,
    ConvertToSpacePipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
