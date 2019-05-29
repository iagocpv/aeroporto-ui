import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VooListComponent } from '../voo-list/voo-list.component';

const routes: Routes = [
    { path: '', component: VooListComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VooRoutingModule { }