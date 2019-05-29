import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AviaoListComponent } from '../aviao-list/aviao-list.component';
import { AviaoRoutingModule } from './aviao.routing.module';
import { AviaoService } from './aviao.service';
import { MaterialModule } from '../core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarAviaoComponent } from '../cadastrar-aviao/cadastrar-aviao.component';

@NgModule({
    declarations: [
        CadastrarAviaoComponent,
        AviaoListComponent
    ],
    imports: [ 
        CommonModule,
        AviaoRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        
     ],
    exports: [],
    providers: [AviaoService],
})
export class AviaoModule {}