import { Component, OnInit, Input } from '@angular/core';

import { Plant } from '../../shared/models/plant';

@Component({
  selector: 'app-garden-grid',
  templateUrl: './garden-grid.component.html',
  styleUrls: ['./garden-grid.component.scss']
})



export class GardenGridComponent implements OnInit {

  @Input() gardenWidth = 3;
  @Input() gardenHeight = 3;
  constructor() { }

  plantTiles: Plant[][];

  ngOnInit() {
    
    this.plantTiles = [];

    for(var i: number = 0; i < this.gardenHeight; i++) {
      this.plantTiles[i] = [];
      for(var j: number = 0; j < this.gardenWidth; j++) {
        this.plantTiles[i][j] = new Plant();
      }
    }
  }

}
