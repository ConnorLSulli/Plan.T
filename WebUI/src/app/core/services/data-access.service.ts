import { Injectable } from '@angular/core';
import { Plant } from '../../shared/models/plant';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor() { }
  
  getInventoryPlants(): Plant[] {
    const remove = {
      'plantName':'remove',
      'companionPlants':[],
      'harmfulPlants':[]
    } as (Plant);

    const tomato = {
      'plantName':'tomato',
      'companionPlants':['onion'],
      'harmfulPlants':['cabbage','bennett']
    } as (Plant);

    const onion = {
      'plantName':'onion',
      'companionPlants':['tomato', 'cabbage'],
      'harmfulPlants':['bennett']
    } as (Plant);

    const cabbage = {
      'plantName':'cabbage',
      'companionPlants':['onion'],
      'harmfulPlants':['tomato','bennett']
    } as (Plant);

    const bennett = {
      'plantName':'bennett',
      'companionPlants':[],
      'harmfulPlants':['cabbage','onion','tomato']
    } as (Plant);

    return [remove, tomato, cabbage, onion, bennett];
  }
}
