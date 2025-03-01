import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BaseComponent} from './components/base.component';
import {HeaderComponent} from './components/header/header.component';
import {RightSectionComponent} from './components/right_info/right_section.component';
import {LeftSectionComponent} from './components/left_info/left_section.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BaseComponent, HeaderComponent, RightSectionComponent, LeftSectionComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Web-prog-angular';
}
