import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviao-list',
  templateUrl: './aviao-list.component.html',
  styleUrls: ['./aviao-list.component.css'],
  preserveWhitespaces: true
})
export class AviaoListComponent implements OnInit {

  cadastrar = false;

  constructor() { }

  ngOnInit() {
  }
  
  toggleCadastrar(){
    this.cadastrar = !this.cadastrar;
  }
  feedback(feedback) {
    this.cadastrar = feedback;
  }

  cancelCadastrar() {
    
  }
  

}
