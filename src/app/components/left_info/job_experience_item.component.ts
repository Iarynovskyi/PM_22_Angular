import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobExperienceService} from '../../services/experience.service';

@Component({
  selector: 'app-job-experience-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job_experience_item.component.html'
})
export class JobExperienceItemComponent implements OnInit {
  jobExperienceItem: any[] = [];

  constructor(private jobExperienceService: JobExperienceService) {}

  ngOnInit() {
    this.jobExperienceItem = this.jobExperienceService.getJobExperience();
  }
}
