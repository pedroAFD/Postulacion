import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'postulacion';
  
  constructor(    
    private router: Router
  ) {

  }

  toGallery(){
    this.router.navigate(['/photo-list'])
  }

  toCreate(){
    this.router.navigate(['/create-photo'])
  }
}
