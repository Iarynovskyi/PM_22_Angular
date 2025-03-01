import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LanguagesService} from '../../services/languages.service';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html'
})
export class LanguagesComponent implements OnInit {
  languagesItems: any[] = [];

  constructor(private languagesService: LanguagesService) {}

  ngOnInit() {
    this.languagesItems = this.languagesService.getLanguages();
  }
}
