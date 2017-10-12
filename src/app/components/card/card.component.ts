import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @ViewChild('img') image: ElementRef;
  @ViewChild('block') block: ElementRef;
  @ViewChild('blockMob') mobile: ElementRef;

  @Input() carac: any = {
    imgMobile: "",
    imgDesk: "",
    name: "Vistoria",
    desc: "Vistoria minunciosa realizada no recebimento do veículo em nossa base e em nossos pontos de apoio, no qual é discriminado o estado de conservação do veículo, especificando todas as características do veículo."
  }
  @Input() color: string = "green";
  @Input() textColor: string = "#FFFFFF";

  constructor() { }

  ngOnInit() {
    this.setColor();
  }

  private setColor(){
    this.image.nativeElement.style.backgroundColor = this.color;
    this.block.nativeElement.style.backgroundColor = this.color;
    this.mobile.nativeElement.style.backgroundColor = this.color;
    this.block.nativeElement.style.color = this.textColor;
    this.mobile.nativeElement.style.color = this.textColor;
  }

}
