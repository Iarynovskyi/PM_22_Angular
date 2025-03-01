import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  getContactItems() {
    return [
      {
        telephone: 'tel:+380508485120',
        site: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        map: 'https://www.google.com/maps?q=769+Prudence+Street,+Lincoln+Park,+MI+48146'
      }
    ];
  }
}
