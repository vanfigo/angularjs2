import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Marker } from '../../classes/marker.class';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent implements OnInit {

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<MapEditComponent>,
              @Inject(MAT_DIALOG_DATA) public marker: Marker,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(marker);
  }

  ngOnInit() {
  }

  save = () => this.dialogRef.close(this.form.value);

  cancel = () => this.dialogRef.close();

}
