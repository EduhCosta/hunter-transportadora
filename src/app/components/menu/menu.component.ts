import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'Menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  @ViewChild('Menu') menu: ElementRef;
  @ViewChild('setBack') back: ElementRef;

  @Input() pages: Array<any> = [
    {title: "Home", route: "/home"},
    {title: "Contato", route: "/contato"},
    {title: "Sobre", route: "/sobre"},
    {title: "Orçamento", route: "/orcamento"}
  ]

  @Input() logo:string = "asdasd";
  @Input() bg:string = "";

  private flag:boolean = false;

  constructor() { }

  ngOnInit() {
    this.setBackground();
  }

  public toggleMenu(){
    if(this.flag){
      this.menu.nativeElement.style.display = "none";
    }else{
      this.menu.nativeElement.style.display = "inline-block";
    }
    this.flag = !this.flag;
  }

  public setBackground(){
    if(this.bg != "" && screen.width > 418){
      this.back.nativeElement.style.backgroundImage = this.bg;
      this.back.nativeElement.style.backgroundSize = "auto 100%";
      this.back.nativeElement.style.backgroundPosition = "top";
    }
  }

}
