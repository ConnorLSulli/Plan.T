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
  }

}
