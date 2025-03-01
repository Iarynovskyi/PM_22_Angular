import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HobbiesService} from '../../../services/hobbies.service';

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
    this.hobbiesItem = this.hobbiesService.getHobbies().map(hobbie => ({
      ...hobbie,
      animatedLevel: 0,
    }));

    this.animateProgress();
  }


  animateProgress() {
    this.hobbiesItem.forEach((hobbie, index) => {
      setTimeout(() => {
        let progress = 0;
        const interval = setInterval(() => {
          if (progress >= hobbie.level) {
            clearInterval(interval);
          } else {
            progress += 2;
            hobbie.animatedLevel = progress;
          }
        });
      }, index * 100);
    });
  }
}
