import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Service_frontend} from '../../service/service_frontend';
import {map} from 'rxjs';
import {Skill} from '../../service/dto_interfaces';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  skillsItems: Skill[] = [];

  constructor(private skillsService: Service_frontend) {}

  ngOnInit(): void {
    this.skillsService.getSkill()
      .pipe(
        map((data: Skill[]) => data.map(skill => ({
          ...skill,
          animatedLevel: 0,
        })))
      )
      .subscribe(updatedSkills => {
        this.skillsItems = updatedSkills;
        this.animateProgress();
      });
  }

  animateProgress() {
    this.skillsItems.forEach((skill, index) => {
      setTimeout(() => {
        let progress = 0;
        const level = Number(skill.level);
        const interval = setInterval(() => {
          if (progress >= level) {
            clearInterval(interval);
          } else {
            progress += 2;
            skill.animatedLevel = progress;
          }
        }, 30);
      }, index * 100);
    });
  }
}
