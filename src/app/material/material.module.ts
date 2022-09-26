import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatDialogModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule
]

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
