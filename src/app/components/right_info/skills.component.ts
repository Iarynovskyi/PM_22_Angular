import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillsService} from '../../services/skills.service';

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
    this.skillsItems = this.skillsService.getSkills();
  }
}
