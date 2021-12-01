import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories!:Category[]

  constructor(private service: CategoryService) { 
      this.service.getCategories().subscribe((result) => {
        this.categories = result;
      });
   }

  ngOnInit(): void {
  }

}
