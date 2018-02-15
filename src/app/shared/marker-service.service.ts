import { LocalStorage } from './local-storage';
import { Injectable } from '@angular/core';

@Injectable()
export class MarkerService extends LocalStorage {

  constructor() {
    super();
    this.init();
  }

  getMarkers() {
    const markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  addMarkers(newMarker) {
    // tslint:disable-next-line:prefer-const
    let markers = JSON.parse(localStorage.getItem('markers'));
    markers.push(newMarker);
    localStorage.setItem('markers', JSON.stringify(markers));
  }
}
