import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Service_frontend} from '../../service/service_frontend';
import {Hobie} from '../../service/dto_interfaces';
import {map} from 'rxjs';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies.component.html'
})
export class HobbiesComponent implements OnInit {
  hobbiesItem: Hobie[] = [];

  constructor(private hobbiesService: Service_frontend) {}

  ngOnInit(): void {
    this.hobbiesService.getHobbies()
      .pipe(
        map((data: Hobie[]) => data.map(hobbie => ({
          ...hobbie,
          animatedLevel: 0,
        })))
      )
      .subscribe(updatedHobbies => {
        this.hobbiesItem = updatedHobbies;
        this.animateProgress();
      });
  }

  animateProgress() {
    this.hobbiesItem.forEach((hobie, index) => {
      setTimeout(() => {
        let progress = 0;
        const level = Number(hobie.level);
        const interval = setInterval(() => {
          if (progress >= level) {
            clearInterval(interval);
          } else {
            progress += 2;
            hobie.animatedLevel = progress;
          }
        }, 30);
      }, index * 100);
    });
  }


}
