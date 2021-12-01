import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';
// import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-photographer-dashboard',
  templateUrl: './photographer-dashboard.component.html',
  styleUrls: ['./photographer-dashboard.component.css']
})
export class PhotographerDashboardComponent implements OnInit {

  contacts!: Contact[];

  constructor(private service: ContactsService) {
    service.getContacts().subscribe((results) => {
      this.contacts = results;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}

// This is similar to the TASK(S) file