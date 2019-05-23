import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { LoadImagesService } from '../../providers/load-images.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  files: FileItem[] = [];
  onElement: boolean = false;

  constructor(private loadImagesService: LoadImagesService) { }

  ngOnInit() {
  }

  loadImages = () => {
    this.loadImagesService.saveImagesFirebase(this.files);
  }

  clean = () => {
    this.files = [];
  }

}
