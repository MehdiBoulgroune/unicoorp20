import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  medias: Media[];
  constructor() {
    this.medias = [
      {
        id: 1,
        link: 'https://www.youtube.com/watch?v=liLxiv4S1Qw'
      },
      {
        id: 2,
        link: 'http://www.elwatan.com/hebdo/etudiant/adlen-berkani-se-lance-dans-le-e-learning-au-' +
        'profit-des-entreprises-algeriennes-21-03-2018-364821_264.php'
      },
      {
        id: 3,
        link: 'https://www.lemonde.fr/emploi/article/2018/06/06/retourner-en-algerie-pour-faire-carriere_5310584_1698637.html'
      },
      {
        id: 4,
        link: 'https://scet.berkeley.edu/hecs-silicon-valley-entrepreneurs/'
      },
      {
        id: 5,
        link: 'https://www.facebook.com/UniCoorp.dz/photos/rpp.319742181834390/401036437038297/?type=3&amp;theater'
      },
    ];
  }

  ngOnInit() {
  }

}
export interface Media {
  id: number;
  link: string;
}
