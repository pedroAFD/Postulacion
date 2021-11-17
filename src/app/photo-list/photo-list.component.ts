import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  constructor(
    private restApi: RestApiService,
    private router: Router
  ) {

  }

  images: any = [];

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
    return this.restApi.getImages().subscribe((data: {}) => {
      this.images = data;
      console.log(this.images);
    })
  }

  deleteEmployee(id) {
    if (window.confirm('Are you sure you want to delete this image?')) {
      this.restApi.deleteImage(id).subscribe(data => {
        this.loadImages()
      })
    }
  }

}
