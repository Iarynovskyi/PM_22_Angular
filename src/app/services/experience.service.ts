import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobExperienceService {
  getJobExperience() {
    return [
      {
        company: 'Creative Agency',
        location: 'Chicago',
        duration: '2020 - Present',
        position: 'Senior Web Designer',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text...',
      },
    ];
  }
}
