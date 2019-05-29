import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAviaoComponent } from './cadastrar-aviao.component';

describe('CadastrarAviaoComponent', () => {
  let component: CadastrarAviaoComponent;
  let fixture: ComponentFixture<CadastrarAviaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarAviaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAviaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
