import { Component, OnInit, Input } from '@angular/core';

import { GardenTile } from '../../../shared/models/garden-tile';
import { TileSelectService } from '../../../core/services/tile-select.service';
import { Plant } from '../../../shared/models/plant';

@Component({
  selector: 'app-plant-container',
  templateUrl: './plant-container.component.html',
  styleUrls: ['./plant-container.component.scss']
})
export class PlantContainerComponent implements OnInit {
  
  @Input() gardenTile = new GardenTile();
  constructor(private tileSelectService: TileSelectService) { }

  
  isCompanionPlant = false;
  isHarmfulPlant = false;

  tileDisplay = '';

  ngOnInit() {
    this.gardenTile.isOccupied = false;
    this.setDisplay('');

    this.tileSelectService.getSubjectTile().subscribe(val => {

        this.setActiveRelation(val);
        console.log(this.isCompanionPlant +''+this.isHarmfulPlant);
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

  private setActiveRelation(activePlant: Plant): void {
    
    this.isCompanionPlant = false;
    this.isHarmfulPlant = false;

    activePlant.companionPlants.forEach(companion => {
      if(companion === this.gardenTile.plant.plantName) {
        this.isCompanionPlant = true;
      }
    });

    activePlant.harmfulPlants.forEach(competetor => {
      if(competetor === this.gardenTile.plant.plantName) {
        this.isCompanionPlant = false;
        this.isHarmfulPlant = true;
      }
    });
  }

}
