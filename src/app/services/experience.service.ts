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
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        company: "Creative Market",
        location: "United Kingdom",
        years: "2015 - 2020",
        position: "Graphic Designer",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        company: "Marketing Agency",
        location: "United Kingdom",
        years: "2013 - 2015",
        position: "Marketing Manager",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    ];
  }
}
