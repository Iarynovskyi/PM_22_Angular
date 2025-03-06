// education-item.component.ts
import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Service_frontend} from '../../service/service_frontend';
import {Education} from '../../service/dto_interfaces';

@Component({
  selector: 'app-education-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education_item.component.html'
})

export class EducationItemComponent implements OnInit {
  educationItems: Education[] = [];

  constructor(private educationService: Service_frontend) {}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(
      (data: Education[]) =>
      {
        this.educationItems = data;
      }
    );  }
}
