import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VooListComponent } from './voo-list.component';

describe('VooListComponent', () => {
  let component: VooListComponent;
  let fixture: ComponentFixture<VooListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VooListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VooListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
