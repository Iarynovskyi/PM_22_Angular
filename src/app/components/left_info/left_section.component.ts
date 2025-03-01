// left-section.component.ts
import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {EducationItemComponent} from './education/education_item.component';
import {JobExperienceItemComponent} from './experience/job_experience_item.component';
import {ContactComponent} from './contact/contact.component';

@Component({
  selector: 'app-left-section',
  standalone: true,
  imports: [
    CommonModule,
    EducationItemComponent,
    JobExperienceItemComponent,
    ContactComponent
  ],
  templateUrl: './left_section.component.html'
})
export class LeftSectionComponent {

  sectionsState: { [key: string]: boolean } = {
    educations: false,
    experiences: false,
  };

  toggleSection(section: string) {
    this.sectionsState[section] = !this.sectionsState[section];
  }
}
