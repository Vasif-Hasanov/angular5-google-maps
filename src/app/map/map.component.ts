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


}
