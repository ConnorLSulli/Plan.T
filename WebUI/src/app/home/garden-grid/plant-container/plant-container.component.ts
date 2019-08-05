import { Component, OnInit, Input } from '@angular/core';

import { GardenTile } from '../../../shared/models/garden-tile';
import { TileSelectService } from '../../../core/services/tile-select.service';

@Component({
  selector: 'app-plant-container',
  templateUrl: './plant-container.component.html',
  styleUrls: ['./plant-container.component.scss']
})
export class PlantContainerComponent implements OnInit {
  
  @Input() gardenTile = new GardenTile();
  constructor(private tileSelectService: TileSelectService) { }

  tileDisplay = '';

  ngOnInit() {
    this.setDisplay('');
    this.tileSelectService.getSubjectTile().subscribe(val => {
      
   });
  }
  gardenTileClicked() {
     //console.log(this.tileSelectService.getCurrentTile());
     this.gardenTile.plant = this.tileSelectService.getCurrentTile();
     this.gardenTile.isOccupied = true;
     if(this.gardenTile.plant.plantName === "remove") {
      this.gardenTile.isOccupied = false;
     }
     this.setDisplay(this.gardenTile.plant.plantName);
  }
  
  private setDisplay(plantName: string): void {
    let displayText = '';
    if( this.gardenTile.isOccupied == true ) {
      displayText = plantName;
    }
    this.tileDisplay = displayText;
  }

}
