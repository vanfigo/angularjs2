import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FileItem } from '../../models/file-item';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<FileItem>;
  items: Observable<FileItem[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection<FileItem>('img');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
  }

}
