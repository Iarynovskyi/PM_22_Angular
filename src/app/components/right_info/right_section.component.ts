// right-section.component.ts
import { Component } from '@angular/core';
import {SkillsComponent} from './skills.component';
import {HobbiesComponent} from './hobbies.component';
import {LanguagesComponent} from './languages.component';
import {ReferencesComponent} from './references.component';
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
export class RightSectionComponent { }
