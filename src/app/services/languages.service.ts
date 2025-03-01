import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  getLanguages() {
    return [
      { name: 'English', level: 85 },
      { name: 'German', level: 65 },
      { name: 'Spanish', level: 45 },
    ];
  }
}
