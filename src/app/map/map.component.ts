import { Markers } from './../markers';
import { Marker } from './../marker';
import { Component } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  title = 'Google Map in Angular 5';
  zoom: 12;
  lat = 40.365535;
  lng = 49.851644;


  // markers are not in a right positon, I'll move them to the markers.ts
  markers: Marker[] = [
    {
        name: 'Sahil metro',
        lat: 40.372014,
        lng: 49.844402,
        draggable: true
    },
    {
        name: 'Icarishahar metro',
        lat: 40.366027,
        lng: 49.831525,
        draggable: false
    },
    {
        name: '28 May metro',
        lat: 40.379796,
        lng: 49.848726,
        draggable: true
    },
    {
        name: 'Kubinka | need weed? :) just kidding..',
        lat: 40.382418,
        lng: 49.833382,
        draggable: false
    }
];

  constructor() { }

  onClickedMarker(marker: Marker, i: number) {
    console.log(`your marker ${marker.name} clicked at index ${i}`);
  }


  onClickedMap(e) {
    const newMarker = {
      name: 'test',
      lat: e.coords.lat,
      lng: e.coords.lng,
      draggable: true
    };

    this.markers.push(newMarker);
  }

  markerDragEnd(marker: any, e: any) {

    console.log('yea got it ', marker, e);

    const updatedMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false

    };
    // this is for loca storage, will update asap
    const newLat = e.coords.lat;
    const newLng = e.coord.lng;
  }

}


