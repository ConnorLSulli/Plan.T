import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileSelectService } from './services/tile-select.service';
import { DataAccessService } from './services/data-access.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TileSelectService, DataAccessService
  ]
})
export class CoreModule { }
