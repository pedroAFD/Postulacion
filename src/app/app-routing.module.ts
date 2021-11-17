import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoCreateComponent } from './photo-create/photo-create.component';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'photo-list' },
  { path: 'create-photo', component: PhotoCreateComponent },
  { path: 'photo-list', component: PhotoListComponent },
  { path: 'photo-edit/:id', component: PhotoEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
