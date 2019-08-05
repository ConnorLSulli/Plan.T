import { Component, OnInit, Input } from '@angular/core';
import { Plant } from 'src/app/shared/models/plant';
import { TileSelectService } from 'src/app/core/services/tile-select.service';

@Component({
  selector: 'app-inventory-tile',
  templateUrl: './inventory-tile.component.html',
  styleUrls: ['./inventory-tile.component.scss']
})
export class InventoryTileComponent implements OnInit {

  @Input() plantInventory = new Plant();

  constructor(private tileSelectService: TileSelectService) { }

  tileInventoryDisplay = '';
  quantityDisplay = '';
  isSelected = false;

  ngOnInit() {
    this.tileInventoryDisplay = this.plantInventory.plantName;

    this.tileSelectService.getCurrentTile().subscribe(val => {
       this.isSelected = (val.plantName == this.plantInventory.plantName);
       console.log(val.plantName + ' ' + this.plantInventory.plantName + ' ' + this.isSelected)
    });

  }

  tileClicked(): void {
    this.tileSelectService.ClickInventory(this.plantInventory);
  }
}
