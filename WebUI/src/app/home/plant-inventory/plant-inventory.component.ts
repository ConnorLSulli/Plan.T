import { Component, OnInit, Input } from '@angular/core';

import { Plant } from 'src/app/shared/models/plant';
import { DataAccessService } from 'src/app/core/services/data-access.service';

@Component({
  selector: 'app-plant-inventory',
  templateUrl: './plant-inventory.component.html',
  styleUrls: ['./plant-inventory.component.scss']
})
export class PlantInventoryBarComponent implements OnInit {

  @Input() inventoryLength = 5;
  constructor(private dataAccessService: DataAccessService) { }

  inventoryTiles: Plant[];

  ngOnInit() {
    this.inventoryTiles = this.dataAccessService.getInventoryPlants();
    // //this.inventoryTiles[0] = new PlantInventory();
    // this.inventoryTiles[0] = new Plant();
    // this.inventoryTiles[0].plantName = 'remove';

    // for(var i: number = 1; i < this.inventoryLength; i++) {
    //   //this.inventoryTiles[i] = new PlantInventory();
    //   this.inventoryTiles[i] = new Plant();
    //   this.inventoryTiles[i].plantName = 'test'+i;
    // }
    
  }

}
