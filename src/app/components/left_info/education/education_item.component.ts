// education-item.component.ts
import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {EducationService} from '../../../services/education.service';

@Component({
  selector: 'app-education-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education_item.component.html'
})

export class EducationItemComponent implements OnInit {
  educationItems: any[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit() {
    this.educationItems = this.educationService.getEducationItems();
  }
}
