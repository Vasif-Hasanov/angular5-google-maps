import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  title = 'Angular 5 Google Map';
  lat = 51.678418;
  lng = 7.809007;

  constructor() { }


}
