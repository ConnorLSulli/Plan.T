import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GardenGridComponent } from './garden-grid/garden-grid.component';
import { PlantContainerComponent } from './garden-grid/plant-container/plant-container.component';
import { PlantInventoryBarComponent } from './plant-inventory/plant-inventory.component';
import { InventoryTileComponent } from './plant-inventory/inventory-tile/inventory-tile.component';

@NgModule({
  declarations: [HomeComponent, GardenGridComponent, PlantContainerComponent, PlantInventoryBarComponent, InventoryTileComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
