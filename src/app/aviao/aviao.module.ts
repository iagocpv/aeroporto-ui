import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AviaoListComponent } from '../aviao-list/aviao-list.component';
import { AviaoRoutingModule } from './aviao.routing.module';
import { AviaoService } from './aviao.service';
import { MaterialModule } from '../core/material.module';
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
        FlexLayoutModule,
     ],
    exports: [],
    providers: [AviaoService],
})
export class AviaoModule {}