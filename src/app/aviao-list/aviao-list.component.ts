import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs';

import { AviaoService } from '../aviao/aviao.service';
import { Aviao } from '../aviao/aviao.interface';

@Component({
  selector: 'app-aviao-list',
  templateUrl: './aviao-list.component.html',
  styleUrls: ['./aviao-list.component.css'],
  preserveWhitespaces: true
})
export class AviaoListComponent implements OnInit {

  subscription: Subscription = new Subscription()
  logged = true;
  cadastrar = false;
  avioes: MatTableDataSource<Aviao>
  tableColumns: string[] = ['aviaoId', 'modelo', 'marca', 'status', 'acoes'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private aviaoService: AviaoService) { }

  ngOnInit() {
    this.subscription.add(
      this.aviaoService.getAllAvioes().subscribe( avioes => {
        this.avioes = new MatTableDataSource(avioes)
        this.avioes.paginator = this.paginator;
        this.cadastrar = false
      })
    )
  }  
  toggleCadastrar(){
    this.cadastrar = !this.cadastrar;
  }
  feedback(feedback) {
    this.ngOnInit()    
  }
  onDelete(id: number){
    this.subscription.add(
      this.aviaoService.deleteAviao(id).subscribe(response => {
       if(response!=null) this.ngOnInit();
      })
    );
  }
  cancelCadastrar() {
    this.cadastrar = false
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  

}
