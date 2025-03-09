import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {RightSectionComponent} from '../right_info/right_section.component';
import {LeftSectionComponent} from '../left_info/left_section.component';
import {NgApexchartsModule} from 'ng-apexcharts';


@Component({
  selector: 'app-black_man_page',
  standalone: true,
  imports: [
    HeaderComponent,
    RightSectionComponent,
    LeftSectionComponent,
    NgApexchartsModule
  ],
  templateUrl: './black_man.component.html',
})

export class Black_manComponent {}
