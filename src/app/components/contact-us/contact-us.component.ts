import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contacts!: Contact[];

  contactsForm;

  constructor(private formBuilder: FormBuilder, private contactsService: ContactsService) {
    this.contactsForm = formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactsForm.value);
    this.contactsService.createContact(this.contactsForm.value).subscribe((results) => {
      console.log(results);
      // Below line of code is to reset the form
      this.contactsForm.reset();
    }, (err) => {
      console.log(err);
    });
  }

  get nameFormControl() {
    return this.contactsForm.get('name')!;
  }
  get emailFormControl() {
    return this.contactsForm.get('email')!;
  }
  get phoneFormControl() {
    return this.contactsForm.get('phone')!;
  }
  get messageFormControl() {
    return this.contactsForm.get('message')!;
  }
}
