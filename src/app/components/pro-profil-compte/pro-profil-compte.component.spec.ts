import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProProfilCompteComponent } from './pro-profil-compte.component';

describe('ProProfilCompteComponent', () => {
  let component: ProProfilCompteComponent;
  let fixture: ComponentFixture<ProProfilCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProProfilCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProProfilCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
