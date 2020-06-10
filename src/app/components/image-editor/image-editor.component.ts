import { Component, OnInit, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ImageCroppedEvent, ImageCropperComponent, ImageTransform } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageEditorComponent implements OnInit {
  @ViewChild('imageEditor') imageEditor: ImageCropperComponent;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper: boolean = false;
  transform: ImageTransform = {
    scale: 1,
    rotate: 0,
    flipH: false,
    flipV: false
  };
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
    console.log(JSON.stringify(this.data.event))
  }

  crop() {
    if (this.showCropper) {
      this.imageEditor.crop();
    }
    this.showCropper = !this.showCropper;
  }

}