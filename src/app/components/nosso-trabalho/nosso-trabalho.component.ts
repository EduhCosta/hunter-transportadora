import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'NossoTrabalho',
  templateUrl: './nosso-trabalho.component.html',
  styleUrls: ['./nosso-trabalho.component.sass']
})
export class NossoTrabalhoComponent implements OnInit {

  private caracs: Array<any> = [
    {
      imgMobile: "../../../assets/prancheta.png",
      imgDesk: "",
      name: "Vistoria",
      desc: "Vistoria minunciosa realizada no recebimento do veículo em nossa base e em nossos pontos de apoio, no qual é discriminado o estado de conservação do veículo, especificando todas as características do veículo."
    },
    {
      imgMobile: "../../../assets/transporte.png",
      imgDesk: "",
      name: "Vistoria",
      desc: "Vistoria minunciosa realizada no recebimento do veículo em nossa base e em nossos pontos de apoio, no qual é discriminado o estado de conservação do veículo, especificando todas as características do veículo."
    },
    {
      imgMobile: "../../../assets/coleta.png",
      imgDesk: "",
      name: "Vistoria",
      desc: "Vistoria minunciosa realizada no recebimento do veículo em nossa base e em nossos pontos de apoio, no qual é discriminado o estado de conservação do veículo, especificando todas as características do veículo."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
