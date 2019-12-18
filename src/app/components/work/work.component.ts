import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  projects = [
    { title: 'Wakanda', description: 'El proyecto wakandeano', logo: 'Logo' },
    { title: 'SoX', description: 'El proyecto SoX', logo: 'Logo' },
    { title: 'Gymeet', description: 'El proyecto Gymeet', logo: 'Logo' },
  ];

  constructor() { }

  ngOnInit() { }

}
