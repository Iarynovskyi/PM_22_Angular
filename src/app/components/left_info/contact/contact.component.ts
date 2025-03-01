import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactService} from '../../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  contactItem: any[] = [];

  constructor(private contactServer: ContactService) {}

  ngOnInit() {
    this.contactItem = this.contactServer.getContactItems();
  }
}
