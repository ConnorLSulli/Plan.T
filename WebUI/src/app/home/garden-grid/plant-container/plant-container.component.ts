import { Component, OnInit, Input } from '@angular/core';

import { Plant } from '../../../shared/models/plant';

@Component({
  selector: 'app-plant-container',
  templateUrl: './plant-container.component.html',
  styleUrls: ['./plant-container.component.scss']
})
export class PlantContainerComponent implements OnInit {
  
  @Input() plant = new Plant();
  constructor() { }

  ngOnInit() {
    
    if( this.plant.plantName == null) {
      this.plant = new Plant();
      this.plant.plantName = 'Open';
    }
  }

}
