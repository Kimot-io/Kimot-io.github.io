import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  technologies = [
    {
      image: '../../../assets/images/iconos/angular.png',
      title: 'Angular'
    },
    {
      image: '../../../assets/images/iconos/react.png',
      title: 'React JS'
    },
    {
      image: '../../../assets/images/iconos/vue.png',
      title: 'Vue JS'
    },
    {
      image: '../../../assets/images/iconos/node.png',
      title: 'Node JS'
    },
    {
      image: '../../../assets/images/iconos/ionic.png',
      title: 'Ionic'
    },
    {
      image: '../../../assets/images/iconos/blockchain.png',
      title: 'Blockchain'
    },
    {
      image: '../../../assets/images/iconos/ethereum.png',
      title: 'Ethereum'
    },
    {
      image: '../../../assets/images/iconos/python.png',
      title: 'Python'
    },
    {
      image: '../../../assets/images/iconos/csharp.png',
      title: 'C#'
    },
    {
      image: '../../../assets/images/iconos/java.png',
      title: 'Java'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
