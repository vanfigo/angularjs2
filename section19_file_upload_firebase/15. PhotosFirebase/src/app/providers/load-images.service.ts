import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {

  private IMAGES_FOLDER: string = 'img'

  constructor(private firestore: AngularFirestore) { }

  saveImagesFirebase = (images: FileItem[]) => {
    const storageRef = firebase.storage().ref();
    images.forEach((image: FileItem) => {
      image.isLoading = true;
      if(image.progress < 100) {
        const uploadTask: firebase.storage.UploadTask = storageRef
          .child(`${this.IMAGES_FOLDER}/${image.fileName}`)
          .put(image.file);

        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          ((snapshot: firebase.storage.UploadTaskSnapshot) => {
            image.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          }),
          (error) => console.log('upload error', error),
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(url => {
              image.url = url;
              image.isLoading = false;
              this.saveImage({name: image.fileName, url: image.url});
            });
          }
        )
      }
    })
  }

  saveImage = (image: { name: string, url: string }) => {
    this.firestore.collection(`/${this.IMAGES_FOLDER}`).add(image);
  }

}
