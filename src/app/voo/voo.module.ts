import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VooListComponent } from '../voo-list/voo-list.component';
import { VooRoutingModule } from './voo.routing.module';
import { MaterialModule } from '../core/material.module';
import { CadastrarVooComponent } from '../cadastrar-voo/cadastrar-voo.component';

@NgModule({
  declarations: [
    CadastrarVooComponent,
    VooListComponent
  ],
  imports: [
    CommonModule,
    VooRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class VooModule { }
