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

   addMarkers(m) {

    const markers = JSON.parse(localStorage.getItem('markers'));
    markers.push(m);
    localStorage.setItem('markers', JSON.stringify(markers));
  }

  updateMarker(m, newLat, newLng) {
      // tslint:disable-next-line:prefer-const
      let markers = JSON.parse(localStorage.getItem('markers'));

      // tslint:disable-next-line:prefer-const
      for (let i = 0; i < markers.length; i++) {
        if (m.lat === markers[i].lat && m.lng === markers[i].lng) {
          markers[i].lat = newLat;
          markers[i].lng = newLng;
        }
      }

      localStorage.setItem('markers', JSON.stringify(markers));
  }

  removeMarker(m) {
      // tslint:disable-next-line:prefer-const
      let markers = JSON.parse(localStorage.getItem('markers'));

      // tslint:disable-next-line:prefer-const
      for (let i = 0; i < markers.length; i++) {
        if (m.lat === markers[i].lat && m.lng === markers[i].lng) {
          markers.splice(1, i);
        }
      }

      localStorage.setItem('markers', JSON.stringify(markers));
  }
}
