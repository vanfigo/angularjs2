import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Output() mouseOn: EventEmitter<boolean> = new EventEmitter();
  @Input() files: FileItem[];

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseOn.emit(true);
    this.preventStop(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseOn.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    const transfer = this.getTransfer(event);
    if(transfer) {
      this.extractFiles(transfer.files);
      this.preventStop(event);
    }
    this.mouseOn.emit(false);
  }

  private getTransfer = (event: any) =>
    event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;

  private extractFiles = (filesList: FileList) => {
    for(let property in Object.getOwnPropertyNames(filesList)) {
      let file = filesList[property];
      if(this.canBeLoaded(file)) {
        this.files.push(new FileItem(file));
      }
    }
  }

  constructor() { }

  private canBeLoaded = (file: File): boolean =>
    !this.previouslyDropped(file.name) && this.isImage(file.type);

  private preventStop = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }

  private previouslyDropped = (fileName: string): boolean =>
    this.files.find((file: FileItem) => file.fileName === fileName) !== undefined;

  private isImage = (fileType: string): boolean =>
    fileType === '' || fileType === undefined ? false : fileType.startsWith('image');
}
