import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoBleu: boolean;
  innerWidth: number;
  constructor(private location: Location) {
  }

  ngOnInit() {
  }

  choixLogo(): boolean {
    return ((this.location.path() === '') && (window.innerWidth < 991));
  }

  choixCouleur(): boolean {
    return (this.location.path() === '');
  }
}
