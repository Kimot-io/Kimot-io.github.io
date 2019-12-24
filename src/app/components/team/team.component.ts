import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team = [
    {
      name: 'Pablo Salazar',
      description: 'Co-Founder & Back-End Developer',
      photo: '../../../assets/images/team/pablo-salazar.jpg',
      linkedin: 'https://www.linkedin.com/in/pablo-salazar-branchiccela-59868711a/'
    },
    {
      name: 'Guillermo Biatturi',
      description: 'Co-Founder & Front-End Developer',
      photo: '../../../assets/images/team/guillermo-biatturi.jpg',
      linkedin: 'https://www.linkedin.com/in/gbiatturi/'
    },
    {
      name: 'Pablo Pereira',
      description: 'Co-Founder & Full-Stack Developer',
      photo: '../../../assets/images/team/pablo-pereira.png',
      linkedin: 'https://www.linkedin.com/in/pablocpm1/'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
