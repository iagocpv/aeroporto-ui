import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviaoListComponent } from './aviao-list.component';

describe('AviaoListComponent', () => {
  let component: AviaoListComponent;
  let fixture: ComponentFixture<AviaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
