import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: number[];
  constructor() {
    this.clients = [1, 2, 3, 4, 5];
  }

  ngOnInit() {
  }

}
