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

  @Input() logo:string = "../../../assets/logo-menu.png";
  @Input() bg:string = "";

  private flag:boolean = false;

  constructor() { }

  ngOnInit() {
    this.setBackground();
  }

  public toggleMenu(){
    if(this.flag){
      this.back.nativeElement.style.height = "8vh";
      this.menu.nativeElement.style.display = "none";
    }else{
      this.back.nativeElement.style.height = "30vh";
      setTimeout( ()=>{ this.menu.nativeElement.style.display = "block" } , 250);
    }
    this.flag = !this.flag;
  }

  public setBackground(){
    if(this.bg != "" && screen.width > 418){
      this.back.nativeElement.style.backgroundImage = this.bg;
      this.back.nativeElement.style.backgroundSize = "100% auto";
      this.back.nativeElement.style.backgroundRepeat = "no-repeat";
      this.back.nativeElement.style.backgroundPosition = "top";
    }
  }

}
