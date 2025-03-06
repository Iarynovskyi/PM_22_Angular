import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Service_frontend} from '../../service/service_frontend';
import {Experience} from '../../service/dto_interfaces';

@Component({
  selector: 'app-job-experience-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job_experience_item.component.html'
})
export class JobExperienceItemComponent implements OnInit {
  jobExperienceItem: Experience[] = [];

  constructor(private jobExperienceService: Service_frontend) {}

  ngOnInit(): void {
    this.jobExperienceService.getExperience().subscribe(
      (data: Experience[]) =>
      {
        this.jobExperienceItem = data;
      }
    );
  }
}
