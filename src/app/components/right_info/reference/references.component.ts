import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReferencesService} from '../../../services/references.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html'
})
export class ReferencesComponent implements OnInit {
  referencesItem: any[] = [];

  constructor(private referencesServer: ReferencesService) {}

  ngOnInit() {
    this.referencesItem = this.referencesServer.getReferences();
  }
}
