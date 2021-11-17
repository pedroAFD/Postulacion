import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Image } from '../shared/image';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
    
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  
  getImages(): Observable<Image> {
    return this.http.get<Image>(this.apiURL + '/images')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  getImage(id): Observable<Image> {
    return this.http.get<Image>(this.apiURL + '/images/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  getTags(): Observable<Tag> {
    return this.http.get<Tag>(this.apiURL + '/tags')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  getTag(id): Observable<Image> {
    return this.http.get<Image>(this.apiURL + '/tags/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  
  createImage(Image): Observable<Image> {
    return this.http.post<Image>(this.apiURL + '/images', JSON.stringify(Image), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  
  updateImage(id, Image): Observable<Image> {
    return this.http.put<Image>(this.apiURL + '/images/' + id, JSON.stringify(Image), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  deleteImage(id){
    return this.http.delete<Image>(this.apiURL + '/images/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {       
       errorMessage = error.error.message;
     } else {       
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}