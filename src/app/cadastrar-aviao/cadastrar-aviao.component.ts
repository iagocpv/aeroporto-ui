import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AviaoService } from '../aviao/aviao.service';



@Component({
  selector: 'app-cadastrar-aviao',
  templateUrl: './cadastrar-aviao.component.html',
  styleUrls: ['./cadastrar-aviao.component.css'],
  preserveWhitespaces: true
})
export class CadastrarAviaoComponent implements OnInit {

  @Output() feedback = new EventEmitter();

  cadastrando = true;

  aviaoForm: FormGroup;  
  subscription = new Subscription();

  constructor(private aviaoService: AviaoService, private fb: FormBuilder,
     private router: Router)  { }

  ngOnInit() {
    this.aviaoForm = this.fb.group({
      modelo: [null],
      marca:  [null],
      status: [null]
    })    
  }
  onSubmit(){
  //  this.subscription.add(this.aviaoService.addAviao(this.aviaoForm.value).subscribe());
   this.cadastrando = false;
   this.feedback.emit(this.cadastrando);
  };
  onDestroy(){
    this.subscription.unsubscribe();
  }

}
