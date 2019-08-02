import { Component, OnInit, Input } from '@angular/core';

import { GardenTile } from '../../../shared/models/garden-tile';

@Component({
  selector: 'app-plant-container',
  templateUrl: './plant-container.component.html',
  styleUrls: ['./plant-container.component.scss']
})
export class PlantContainerComponent implements OnInit {
  
  @Input() gardenTile = new GardenTile();
  constructor() { }

  tileDisplay = '';

  ngOnInit() {

    this.tileDisplay = 'open';
    if( this.gardenTile.isOccupied == true ) {
      this.tileDisplay = this.gardenTile.plant.plantName;
    }
  }

}
