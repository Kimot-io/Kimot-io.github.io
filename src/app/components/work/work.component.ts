import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  projects = [
    {
      title: 'Sidgurd | Coming soon',
      description: 'Sidgurd is a great Viking warrior who in despair of saving his family from war he agrees to fight alongside the goddess of the death realm, Hela, in the Ragnarok. He will have to do everything possible to get out of the Ragnarok, defeat his enemies and save his family.',
      photo: '../../../assets/images/work/sidgurd.jpg',
      appStore: '../../../assets/images/stores/App Store.svg',
      googlePlay: '../../../assets/images/stores/Play Store.svg'
    },
    {
      title: 'Gymnasync | Coming soon',
      description: '',
      photo: '../../../assets/images/work/gymasync.jpg',
      appStore: '../../../assets/images/stores/App Store.svg',
      googlePlay: '../../../assets/images/stores/Play Store.svg'
    }

  ];

  constructor() { }

  ngOnInit() { }

}
