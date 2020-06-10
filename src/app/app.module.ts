import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageEditorComponent } from './components/image-editor/image-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatDialogModule, MatButtonModule ],
  declarations: [ AppComponent, ImageEditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
