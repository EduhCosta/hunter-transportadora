import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'FacaOrcamento',
  templateUrl: './faca-orcamento.component.html',
  styleUrls: ['./faca-orcamento.component.sass']
})
export class FacaOrcamentoComponent implements OnInit {

  constructor( private route: Router ) { }

  ngOnInit() {
  }

  private redirect(url:string){
    this.route.navigate([url]);
  }

}
