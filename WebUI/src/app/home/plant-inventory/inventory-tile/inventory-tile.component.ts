import { Component, OnInit, Input } from '@angular/core';
import { PlantInventory } from 'src/app/shared/models/plant-inventory';
import { TileSelectService } from 'src/app/core/services/tile-select.service';

@Component({
  selector: 'app-inventory-tile',
  templateUrl: './inventory-tile.component.html',
  styleUrls: ['./inventory-tile.component.scss']
})
export class InventoryTileComponent implements OnInit {

  @Input() plantInventory = new PlantInventory();

  constructor(private tileSelectService: TileSelectService) { }

  tileInventoryDisplay = '';
  quantityDisplay = '';
  

  ngOnInit() {
    this.tileInventoryDisplay = this.plantInventory.plant.plantName;
    this.quantityDisplay = ''+this.plantInventory.plantCount;

    if (this.plantInventory.plant.plantName == 'remove'){}
  }

  tileClicked(): void {
    this.tileSelectService.ClickInventory(this.plantInventory.plant);
  }
}
