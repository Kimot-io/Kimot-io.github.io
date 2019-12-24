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
      description: 'Our web development services are second to none when it comes to delivering on customer satisfaction. Whether you’re looking to build an ecommerce store, a blog, or simple website for your business, we have the technical expertise to help you succeed.'
    },
    {
      image: '../../../assets/images/others/mobile-service.png',
      title: 'Mobile Development',
      description: 'We provide mobile app development services, specializing in both native and hybrid apps for a wide range of devices. Clients rely on our comprehensive design documentation, agile development and testing, and post-launch support.'
    },
    {
      image: '../../../assets/images/others/ai-service.png',
      title: 'Artificial Intelligence',
      description: 'Our AI solutions include comprehensive, intuitive machine learning tools with automated feature engineering capabilities, resulting in better recommendations for faster, smarter decision making.'
    },
    {
      image: '../../../assets/images/others/blockchain-service.png',
      title: 'Blockchain',
      description: 'We are approaching blockchain and its adjoining technologies which includes smart contracts, distributed ledger, and shared ledger, providing to our clients a number of offerings to assist in the adoption, integration, and awareness of blockchain networks.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
