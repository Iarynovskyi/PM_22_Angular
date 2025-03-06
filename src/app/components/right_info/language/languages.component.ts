import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Service_frontend} from '../../service/service_frontend';
import {ProgressCircleComponent} from '../progress_circle/progress_circle.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {Language} from '../../service/dto_interfaces';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule, ProgressCircleComponent, NgApexchartsModule],
  templateUrl: './languages.component.html'
})

export class LanguagesComponent implements OnInit {
  languagesItems: Language[] = [];

  constructor(private languagesService: Service_frontend) {}

  ngOnInit(): void {
    this.languagesService.getLanguage().subscribe(
      (data: Language[]) =>
      {
        this.languagesItems = data;
      }
    );
  }
}
