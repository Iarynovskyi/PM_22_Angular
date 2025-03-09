import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Header} from '../service/dto_interfaces';
import {Service_frontend} from '../service/service_frontend';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  headerItem: Header[] = [];

  constructor(private headerService: Service_frontend) {}

  ngOnInit(): void {
    this.headerService.getHeader().subscribe(
      (data: Header[]) =>
      {
        this.headerItem = data;
      }
    );
  }
}
