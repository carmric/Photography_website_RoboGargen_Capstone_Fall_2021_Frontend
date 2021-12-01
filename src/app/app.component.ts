import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}

// May have to implement something like this below section of code.
// export class ContactUsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }