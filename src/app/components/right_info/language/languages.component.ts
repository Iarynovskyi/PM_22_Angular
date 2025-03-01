import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LanguagesService} from '../../../services/languages.service';
import {ProgressCircleComponent} from '../progress_circle/progress_circle.component';
import {NgApexchartsModule} from 'ng-apexcharts';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule, ProgressCircleComponent, NgApexchartsModule],
  templateUrl: './languages.component.html'
})
export class LanguagesComponent implements OnInit {
  languagesItems: any[] = [];

  constructor(private languagesService: LanguagesService) {}

  ngOnInit() {
    this.languagesItems = this.languagesService.getLanguages();
  }
}
