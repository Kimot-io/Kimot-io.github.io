import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services = [
    {
      image: '../../../assets/images/others/web-service.png',
      title: 'Web Development',
      description: 'We have great experience in web development, we focus on performance and usability, both for browsers and mobile responsive using the latest technologies.'
    },
    {
      image: '../../../assets/images/others/mobile-service.png',
      title: 'Mobile Development',
      description: 'We have great experience in web development, we focus on performance and usability, both for browsers and mobile responsive using the latest technologies.'
    },
    {
      image: '../../../assets/images/others/ai-service.png',
      title: 'Artificial Intelligence',
      description: 'We have great experience in web development, we focus on performance and usability, both for browsers and mobile responsive using the latest technologies.'
    },
    {
      image: '../../../assets/images/others/blockchain-service.png',
      title: 'Blockchain',
      description: 'We have great experience in web development, we focus on performance and usability, both for browsers and mobile responsive using the latest technologies.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
