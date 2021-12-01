import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  imageUploadForm;
  categories!:Category[];

  constructor(private formBuilder: FormBuilder, private service: ImageService, private categoryService:CategoryService) {

    // // Below lines of code are to upload the image
    this.imageUploadForm = formBuilder.group({
      category_id: ['', Validators.required],
      title: ['', Validators.required],
      image: ['', [Validators.required]]
    });

    this.categoryService.getCategories().subscribe((results) => {
      this.categories = results;
    })
  }

  ngOnInit(): void {
  }


  // The file change/upload function/method.
  pickImage(event: any) {
    const file = event.target.files[0];
    this.imageUploadForm.patchValue({
      image: file
    });
  }

  imageUpload() {
    let formData = this.imageUploadForm.value;
    let f = new FormData();

    // Transfer of all formgroup data into the FormData object;
    for (let k in formData) {
      f.append(k, formData[k]);
    }

    this.service.imageUpload(f).subscribe((result) => {
      alert('Image upload was successful!');
    }, (err) => {
      alert('Upload failed!');
      console.log(err);
    });
  }
}
