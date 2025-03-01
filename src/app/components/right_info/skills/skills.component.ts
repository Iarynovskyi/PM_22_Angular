import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillsService} from '../../../services/skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  skillsItems: any[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skillsItems = this.skillsService.getSkills().map(skill => ({
      ...skill,
      animatedLevel: 0,
    }));

    this.animateProgress();
  }

  animateProgress() {
    this.skillsItems.forEach((skill, index) => {
      setTimeout(() => {
        let progress = 0;
        const interval = setInterval(() => {
          if (progress >= skill.level) {
            clearInterval(interval);
          } else {
            progress += 2;
            skill.animatedLevel = progress;
          }
        });
      }, index * 100);
    });
  }
}
