import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  getEducationItems() {
    return [
      {
        institution: 'Stanford University',
        duration: '2011 - 2013',
        degree: 'Master Degree in Design',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text...' +
          'Lorem Ipsum has been the industry\'s standard dummy text...' +
          'Lorem Ipsum has been the industry\'s standard dummy text...' +
          'Lorem Ipsum has been the industry\'s standard dummy text...',
      },
      {
        institution: 'Chicago University',
        duration: '2007 - 2010',
        degree: 'Bachelor Degree in Design',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text...' +
          'Lorem Ipsum has been the industry\'s standard dummy text...' +
          'Lorem Ipsum has been the industry\'s standard dummy text...' +
          'Lorem Ipsum has been the industry\'s standard dummy text...' +
          'Lorem Ipsum has been the industry\'s standard dummy text...',
      }
    ];
  }
}
