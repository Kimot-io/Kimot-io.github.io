import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  services = [
    {
      title: '',
      firstParagraph: 'In December of 2019, Pablo Pereira, Guillermo Biatturi and Pablo Salazar, driven by the concept of grouping together to use their diverse set of skills to create cutting-edge mobile and web products, created Kimot',
      secondParagraph: 'Kimot is a company focused on providing and implementing innovative technology solutions. We offer Software Factory services, Custom Developments and more innovative solutions through Artificial Intelligence and Blockchain in order to help companies generate new and better efficiency models with a trust model.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
