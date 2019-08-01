import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GardenGridComponent } from './garden-grid/garden-grid.component';

@NgModule({
  declarations: [HomeComponent, GardenGridComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
