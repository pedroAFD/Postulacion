import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-photo-create',
  templateUrl: './photo-create.component.html',
  styleUrls: ['./photo-create.component.scss']
})
export class PhotoCreateComponent implements OnInit {

  @Input() photoDetails = {
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "",
    tags: [],
    imageURL: "",
    thumbnailURL: ""
  }

  tags: any = [];

  constructor(
    private restApi: RestApiService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.restApi.getTags().subscribe((data: {}) => {
      this.tags = data;
      this.tags.forEach(element => {
        element.isSelected = false;
      });    
    })
    
  }

  addImage() {
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
    this.restApi.createImage(this.photoDetails).subscribe((data: {}) => {
      this.router.navigate(['/photo-list'])
    })
  }

  clear(){
    this.photoDetails = {
      createdAt: new Date(),
      updatedAt: new Date(),
      title: "",
      tags: [],
      imageURL: "",
      thumbnailURL: ""
    }

    this.tags.forEach(element => {
      element.isSelected = false;
    });
  }

}
