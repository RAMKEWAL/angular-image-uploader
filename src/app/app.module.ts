import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageEditorComponent } from './components/image-editor/image-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatDialogModule, MatButtonModule, ImageCropperModule, MatExpansionModule, MatSliderModule, MatIconModule ],
  declarations: [ AppComponent, ImageEditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
