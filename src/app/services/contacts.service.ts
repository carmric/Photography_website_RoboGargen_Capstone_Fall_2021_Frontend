import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) { }

  getContacts():Observable<Contact[]> {
    return this.http.get<Contact[]>('http://localhost:5000/contacts');
  }

  createContact(contact:Contact):Observable<Contact[]>{
    return this.http.post<Contact[]>('http://localhost:5000/contacts', contact);
  }
}