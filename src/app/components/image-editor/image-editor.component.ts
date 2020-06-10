import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageEditorComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  
    
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }

  ngOnInit() {
    this.imageChangedEvent = this.data.event
  }

}