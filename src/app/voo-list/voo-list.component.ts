import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voo-list',
  templateUrl: './voo-list.component.html',
  styleUrls: ['./voo-list.component.css'],
  preserveWhitespaces: true
})
export class VooListComponent implements OnInit {
  
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

}
