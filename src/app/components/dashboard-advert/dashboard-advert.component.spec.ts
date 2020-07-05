import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdvertComponent } from './dashboard-advert.component';

describe('DashboardAdvertComponent', () => {
  let component: DashboardAdvertComponent;
  let fixture: ComponentFixture<DashboardAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAdvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
