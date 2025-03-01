import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HobbiesService {
  getHobbies() {
    return [
      { name: 'Book Reading', level: '90%' },
      { name: 'Travelling', level: '65%' },
      { name: 'Playing Chess', level: '85%' },
      { name: 'Painting', level: '70%' },
    ];
  }
}
