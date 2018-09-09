import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  partners: Partner[];
  constructor() {
    this.partners = [
      {
        id: 1,
        link: 'http://www.alcodefi.com/'
      },
      {
        id: 2,
        link: 'https://www.cnepd.edu.dz/index.php/fr/'
      },
      {
        id: 3,
        link: 'http://ifb.dz/'
      },
      {
        id: 4,
        link: 'http://www.if-algerie.com/'
      },
    ];
  }
  ngOnInit() {
  }

}
export interface Partner {
  id: number;
  link: string;
}
