import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getCategoryImages(categoryId:number){
    return this.http.get<Image[]>('http://localhost:5000/images?id=' + categoryId)
  }

  imageUpload(image:any){
    return this.http.post<Image>('http://localhost:5000/images', image);
  }
}
