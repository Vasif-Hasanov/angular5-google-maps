import { Markers } from './../markers';
import { Marker } from './../marker';
import { Component } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  title = 'Add your marker';
  zoom: 12;
  lat = 40.365535;
  lng = 49.851644;

  // will be moved
  locationName;
  latName;
  lngName;
  draggableMarker;
  isDraggable;

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
    // console.log(`your marker ${marker.name} clicked at index ${i}`);
  }

  onClickedMap(e) {
    const newMarker = {
      name: 'it works',
      lat: e.coords.lat,
      lng: e.coords.lng,
      draggable: true
    };
    this.markers.push(newMarker);
  }

  markerDragEnd(marker: any, e: any) {

    const updatedMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false

    };
    // this is for local storage, will update asap
    const newLat = e.coords.lat;
    const newLng = e.coord.lng;
  }


  onAddMarker() {
    if (this.draggableMarker === 'yes') {
      this.isDraggable = true;
    } else {
      this.isDraggable = false;
    }

    const newMarker = {
      name: this.locationName,
      lat: parseFloat(this.latName),
      lng: parseFloat(this.lngName),
      draggable: this.isDraggable
    };

    this.markers.push(newMarker);

  }
}


