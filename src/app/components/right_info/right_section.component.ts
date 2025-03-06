// right-section.component.ts
import { Component } from '@angular/core';
import {SkillsComponent} from './skills/skills.component';
import {HobbiesComponent} from './hobbie/hobbies.component';
import {LanguagesComponent} from './language/languages.component';
import {ReferencesComponent} from './reference/references.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-right-section',
  standalone: true,
  imports: [
    SkillsComponent,
    HobbiesComponent,
    LanguagesComponent,
    ReferencesComponent,
    CommonModule
  ],
  templateUrl: './right_section.component.html'

})
export class RightSectionComponent {
  sectionsState: { [key: string]: boolean } = {
    skills: false,
    hobbies: false,
    languages: false,
    references: false
  };

  toggleSection(section: string) {
    this.sectionsState[section] = !this.sectionsState[section];
  }
}
