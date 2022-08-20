import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
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
  MatRadioModule
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
    MatRadioModule
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
    MatRadioModule
  ]
})
export class MaterialModule { }
