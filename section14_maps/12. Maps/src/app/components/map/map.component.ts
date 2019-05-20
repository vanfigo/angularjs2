import { Component, OnInit } from '@angular/core';

import { Marker } from '../../classes/marker.class';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { MapEditComponent } from './map-edit.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  markers: Marker[] = [];

  constructor(private snackBar: MatSnackBar,
              private dialog: MatDialog) {
    if(localStorage.getItem('markers'))
      this.markers = JSON.parse(localStorage.getItem('markers'));
  }

  ngOnInit() {
  }

  addMarker = (event: any) => {
    this.markers.push(new Marker(event.coords.lat, event.coords.lng));
    this.saveStorage();
    this.snackBar.open('Marker added', 'Close', {duration:3000});
  }

  deleteMarker = (idx: number) => {
    this.markers.splice(idx, 1);
    this.saveStorage();
    this.snackBar.open('Marker deleted', 'Close', {duration:3000});
  }

  editMarker = (marker: Marker) => {
    const dialogRef = this.dialog.open(MapEditComponent, {
      width: '250px',
      data: marker
    });

    dialogRef.afterClosed().subscribe((result: Marker) => {
      if(result) {
        marker.title = result.title;
        marker.description = result.description;
        this.saveStorage();
        this.snackBar.open('Marker updated', 'Close', {duration:3000});
      }
    });
  }

  saveStorage = () => localStorage.setItem('markers', JSON.stringify(this.markers));

}
