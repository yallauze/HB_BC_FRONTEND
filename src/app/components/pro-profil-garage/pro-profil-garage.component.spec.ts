import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProProfilGarageComponent } from './pro-profil-garage.component';

describe('ProProfilGarageComponent', () => {
  let component: ProProfilGarageComponent;
  let fixture: ComponentFixture<ProProfilGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProProfilGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProProfilGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
