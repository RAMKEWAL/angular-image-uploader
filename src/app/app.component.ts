import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageEditorComponent } from './components/image-editor/image-editor.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(
    private dialog: MatDialog
  ) {}

  openImageEditor(event) {
    const editor = this.dialog.open(
      ImageEditorComponent,
      {
        data: event
      }
    )
  }
}
