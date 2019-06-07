import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Voo } from '../voo/voo.interface';
import { VooService } from '../voo/voo.service';

@Component({
  selector: 'app-voo-list',
  templateUrl: './voo-list.component.html',
  styleUrls: ['./voo-list.component.css'],
  preserveWhitespaces: true
})
export class VooListComponent implements OnInit {
  
  subscription: Subscription = new Subscription()
  logged = true;
  cadastrar = false;
  voos: MatTableDataSource<Voo>
  tableColumns  :  string[] = ['vooId', 'destino', 'partida', 'chegada'] 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private vooService: VooService) { }

  ngOnInit() {
    this.subscription.add(
      this.vooService.getAllVoos().subscribe( voos => {
        this.voos = new MatTableDataSource(voos)
        this.voos.paginator = this.paginator;
        this.cadastrar = false
      })
    )
  }  
  toggleCadastrar(){
    this.cadastrar = !this.cadastrar;
  }
  feedback(feedback) {
    if(feedback == true) {
      this.ngOnInit()
    } else {
      
    }
    
  }
  onDelete(id: number){
    this.subscription.add(
      this.vooService.deleteVoo(id).subscribe(response => {
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
