// import { NewMarker } from './../markers/new-marker';
import { Markers } from './../markers/markers';
import { Marker } from '../markers/marker';
import { Component } from '@angular/core';
import { MarkerService } from '../shared/marker-service.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  title = 'Add your marker';
  // zoom: 12;
  lat = 40.365535;
  lng = 49.851644;

  // will be moved to new-marker.ts
  locationName;
  latName;
  lngName;
  draggableMarker;
  isDraggable;

  // markers are not in a right positon, I'll move them to the markers.ts
  markers: Marker[] = [ ];

  constructor(private markerService: MarkerService) {
    this.markers = this.markerService.getMarkers();
  }

  onClickedMarker(marker: Marker, i: number) {
    // console.log(`your marker ${marker.name} was clicked at index ${i}`);
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

    const newLat = e.coords.lat;
    const newLng = e.coords.lng;
    this.markerService.updateMarker(updatedMarker, newLat, newLng);
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
    this.markerService.addMarkers(newMarker);

  }
}


