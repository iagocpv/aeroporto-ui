import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarVooComponent } from './cadastrar-voo.component';

describe('CadastrarVooComponent', () => {
  let component: CadastrarVooComponent;
  let fixture: ComponentFixture<CadastrarVooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarVooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarVooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
