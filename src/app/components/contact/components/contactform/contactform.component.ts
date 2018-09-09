import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendForm(): void {
    emailjs.sendForm('smtp_server', 'contact_form', '#contactForm', 'user_XfpCB4mtowi4fD6l1MW2R')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        window.location.reload();
      }, (err) => {
        console.log('FAILED...', err);
        window.location.reload();
      });
  }

}
