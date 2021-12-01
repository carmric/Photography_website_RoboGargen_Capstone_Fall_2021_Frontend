import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  // This function will get ALL of the categories
  getCategories(){
    return this.http.get<Category[]>('http://localhost:5000/categories')
  }

}
