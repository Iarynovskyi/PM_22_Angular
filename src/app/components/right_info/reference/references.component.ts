import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Service_frontend} from '../../service/service_frontend';
import {Reference} from '../../service/dto_interfaces';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html'
})
export class ReferencesComponent implements OnInit {
  referencesItem: Reference[] = [];

  constructor(private referencesServer: Service_frontend) {}

  ngOnInit(): void {
    this.referencesServer.getReference().subscribe(
      (data: Reference[]) =>
      {
        this.referencesItem = data;
      }
    );
  }
}
