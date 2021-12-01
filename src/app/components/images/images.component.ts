import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/interfaces/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images!:Image[];

  constructor(private route:ActivatedRoute, private service:ImageService) { 
    route.queryParamMap.subscribe((params) => {
      let id = params.get('id');
      if(id != undefined){
        this.service.getCategoryImages(parseInt(id)).subscribe((result) => {
          this.images = result;
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
