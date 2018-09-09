import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  public changeLanguages(language) {
    this.translate.use(language);
  }

}
