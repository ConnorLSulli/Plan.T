import { Injectable } from '@angular/core';
import { Plant } from 'src/app/shared/models/plant';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TileSelectService {

  //currentTile: Plant = new Plant();
  private tileSubject = new Subject<Plant>();
  private currentPlant = new Plant();
  
  constructor() {
    this.tileSubject.subscribe(value => {
      this.currentPlant = value;
      console.log(this.currentPlant.plantName);
    });
   }

  public ClickInventory(plant: Plant) {
    this.tileSubject.next(plant);
  }

  // public getRelation(neighbor: Plant): number {
  //   neighbor.companionPlants.forEach(element => {
      
  //   });
  //   neighbor.HarmfulPlants.forEach(element => {
      
  //   });
  //   return 0;
  // }

  public getCurrentTile(): Observable<Plant> {
    return this.tileSubject;
  }

}
