import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  getSkills() {
    return [
      { name: 'Adobe Photoshop', level: '90' },
      { name: 'Adobe Illustrator', level: '65' },
      { name: 'Microsoft Word', level: '85' },
      { name: 'HTML5/CSS3', level: '80' },
    ];
  }
}
