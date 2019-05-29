import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AviaoListComponent } from '../aviao-list/aviao-list.component';

const routes: Routes = [
    { path: '', component: AviaoListComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AviaoRoutingModule { }