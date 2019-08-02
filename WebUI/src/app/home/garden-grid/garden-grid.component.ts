import { Component, OnInit, Input } from '@angular/core';

// import { Plant } from 'shared/models/plant';
import { GardenTile } from '../../shared/models/garden-tile';
import { Plant } from 'src/app/shared/models/plant';

@Component({
  selector: 'app-garden-grid',
  templateUrl: './garden-grid.component.html',
  styleUrls: ['./garden-grid.component.scss']
})



export class GardenGridComponent implements OnInit {

  @Input() gardenWidth = 3;
  @Input() gardenHeight = 3;
  constructor() { }

  gardenTiles: GardenTile[][];

  ngOnInit() {
    
    this.gardenTiles = [];

    for(var i: number = 0; i < this.gardenHeight; i++) {
      this.gardenTiles[i] = [];
      for(var j: number = 0; j < this.gardenWidth; j++) {
        this.gardenTiles[i][j] = new GardenTile();
        this.gardenTiles[i][j].isOccupied = false;
        this.gardenTiles[i][j].plant = new Plant();
      }
    }
  }

}
