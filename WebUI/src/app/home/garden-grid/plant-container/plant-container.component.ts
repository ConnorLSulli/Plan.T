import { Component, OnInit, Input } from '@angular/core';

//import { Plant } from '../../../shared/models';

@Component({
  selector: 'app-plant-container',
  templateUrl: './plant-container.component.html',
  styleUrls: ['./plant-container.component.scss']
})
export class PlantContainerComponent implements OnInit {
  
  @Input() plantContainer = '';
  plant = 'X';
  constructor() { }

  ngOnInit() {
    
    if(this.plantContainer !== '') {
      this.plant = this.plantContainer;
    }
  }

}
