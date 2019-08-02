import { Component, OnInit, Input } from '@angular/core';
import { PlantInventory } from 'src/app/shared/models/plant-inventory';
import { Plant } from 'src/app/shared/models/plant';

@Component({
  selector: 'app-plant-inventory',
  templateUrl: './plant-inventory.component.html',
  styleUrls: ['./plant-inventory.component.scss']
})
export class PlantInventoryComponent implements OnInit {

  @Input() inventoryLength = 5;
  constructor() { }

  inventoryTiles: PlantInventory[];

  ngOnInit() {
    this.inventoryTiles = [];
    this.inventoryTiles[0] = new PlantInventory();
    this.inventoryTiles[0].plant = new Plant();
    this.inventoryTiles[0].plant.plantName = 'remove plant';

    for(var i: number = 1; i < this.inventoryLength; i++) {
      this.inventoryTiles[i] = new PlantInventory();
      this.inventoryTiles[i].plant = new Plant();
      this.inventoryTiles[i].plant.plantName = 'test';
    }
  }

}
