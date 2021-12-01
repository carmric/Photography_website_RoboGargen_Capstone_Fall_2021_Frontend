import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message!: Contact;
    // Line of code above - If the code is coming up as an error, but it really isn't then just put a '!' behind the variable.

  constructor() {}

  ngOnInit(): void {
  }

}
// This is similar to the task.component.html