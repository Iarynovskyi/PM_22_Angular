import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Service_frontend} from '../../service/service_frontend';
import {Contact} from '../../service/dto_interfaces';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  contactItem: Contact[] = [];

  constructor(private contactServer: Service_frontend) {}

  ngOnInit(): void {
    this.contactServer.getContact().subscribe(
      (data: Contact[]) =>
      {
        this.contactItem = data;
      }
    );
  }
}
