import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGarageComponent } from './dashboard-garage.component';

describe('DashboardGarageComponent', () => {
  let component: DashboardGarageComponent;
  let fixture: ComponentFixture<DashboardGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
