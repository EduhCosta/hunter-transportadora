import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'FormContato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.sass']
})
export class FormContatoComponent implements OnInit {

  private phoneMask: Array<any> = [];
 
  @ViewChild('fone') phone:ElementRef;

  constructor() { }

  ngOnInit() {
    this.checkSizeInput();
  }

  // Máscara para o telefone
  private checkSizeInput(){
    if(this.phone.nativeElement.value[6] != 9 ){
      this.phoneMask  = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }else{
      this.phoneMask  = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
  }

}
