import { Component } from '@angular/core';
import {GalleryComponent} from "./gallery/gallery.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-var-app';

  addNewPicture(gallery:GalleryComponent) {
    gallery.pictures.unshift(gallery.generateImage())
  }
  removeFirstPicture(gallery:GalleryComponent) {
    gallery.pictures.shift();
  }
}
