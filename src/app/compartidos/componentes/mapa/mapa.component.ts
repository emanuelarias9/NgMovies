import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  icon,
  latLng,
  LeafletMouseEvent,
  marker,
  Marker,
  MarkerOptions,
  tileLayer,
} from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { Coordenada } from './Coordenada';

@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css',
})
export class MapaComponent implements OnInit {
  ngOnInit(): void {
    this.layers = this.coordenadasIniciales.map((valor) => {
      const mark = marker([valor.latitud, valor.longitud], this.markerOptions);
      return mark;
    });
  }
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '...',
      }),
    ],
    zoom: 14,
    center: latLng(11.006105822908992, -74.81270748193663),
  };

  @Input()
  coordenadasIniciales: Coordenada[] = [];

  @Output()
  coordenadaSeleccionada = new EventEmitter<Coordenada>();

  markerOptions: MarkerOptions = {
    icon: icon({
      iconSize: [25, 40],
      iconAnchor: [15, 40],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png',
    }),
  };

  layers: Marker<any>[] = [];

  markLocation(event: LeafletMouseEvent) {
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    this.layers = [];
    this.layers.push(marker([latitud, longitud], this.markerOptions));
    this.coordenadaSeleccionada.emit({ latitud, longitud });
  }
}
