import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.scss']
})
export class PhotoEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  photoDetails: any = [];
  tags: any = [];

  constructor(
    private restApi: RestApiService,
    public actRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.restApi.getImage(this.id).subscribe((data: {}) => {
      this.photoDetails = data;
    })
    this.restApi.getTags().subscribe((data: {}) => {
      this.tags = data;
      this.tags.forEach(element => {
        element.isSelected = false;
      });
    })
  }

  updateImage() {
    var tagsSelected = [];
    this.tags.forEach(element => {
      if(element.isSelected)
      {
        tagsSelected.push(
          {
            "id": element.id,
            "element": element.label
          }
        )
      }
    });
    this.photoDetails.tags=tagsSelected;
    if (window.confirm('Are you sure you want to update this image?')) {
      this.restApi.updateImage(this.id, this.photoDetails).subscribe(data => {
        this.router.navigate(['/photo-list'])
      })
    }
  }

}
