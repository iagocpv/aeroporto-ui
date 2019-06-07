import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { VooService } from '../voo/voo.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cadastrar-voo',
  templateUrl: './cadastrar-voo.component.html',
  styleUrls: ['./cadastrar-voo.component.css'],
  preserveWhitespaces: true
})
export class CadastrarVooComponent implements OnInit {

  @Output() feedback = new EventEmitter();

  subscription = new Subscription()
  cadastrando = true

  vooForm: FormGroup;
  
  constructor(private vooService: VooService, private fb: FormBuilder,
     private router: Router)  { }

  ngOnInit() {
    this.vooForm = this.fb.group({
      destino: [null],
      partida: [null],
      chegada: [null]
    }) 
  }
  onSubmit(){
    this.subscription.add(
      this.vooService.addVoo(this.vooForm.value).subscribe( () => {
        this.cadastrando = false
        this.feedback.emit(this.cadastrando);
      })
    )   
  };
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
