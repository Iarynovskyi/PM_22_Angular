import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HobbiesService} from '../../services/hobbies.service';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies.component.html'
})
export class HobbiesComponent implements OnInit {
  hobbiesItem: any[] = [];

  constructor(private hobbiesService: HobbiesService) {}

  ngOnInit() {
    this.hobbiesItem = this.hobbiesService.getHobbies();
  }
}
