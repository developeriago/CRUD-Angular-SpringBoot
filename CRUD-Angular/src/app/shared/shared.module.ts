import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatFormFieldModule
  ],
  exports: [
    ErrorDialogComponent,
    CategoryPipe,
    MatFormFieldModule
  ]
})
export class SharedModule { }
