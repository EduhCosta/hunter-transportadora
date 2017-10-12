import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'NossoTrabalho',
  templateUrl: './nosso-trabalho.component.html',
  styleUrls: ['./nosso-trabalho.component.sass']
})
export class NossoTrabalhoComponent implements OnInit {

  private caracs: Array<any> = [
    {
      imgMobile: "../../../assets/icon1.png",
      imgDesk: "../../../assets/icon1-white.png",
      name: "Vistoria",
      desc: "Vistoria minunciosa realizada no recebimento do veículo em nossa base e em nossos pontos de apoio, no qual é discriminado o estado de conservação do veículo, especificando todas as características do veículo."
    },
    {
      imgMobile: "../../../assets/icon2.png",
      imgDesk: "../../../assets/icon2-white.png",
      name: "Transporte para todo país",
      desc: "Carros novos, usados, sinistrados, pequenas embarcações marítmas, tratores, caminhões, micro ônibus, onde disponibilizamos nas principais capitais pontos de apoio para melhor atender nossos clientes."
    },
    {
      imgMobile: "../../../assets/icon3.png",
      imgDesk: "../../../assets/icon3-white.png",
      name: "Coleta e Entrega",
      desc: "Disponibilizamos o serviço de coleta e entrega no veículo em caminhões plataforma, com capacidade para remover de um a cinco veículos de uma só vez, realizado por profissionais capacitados."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
