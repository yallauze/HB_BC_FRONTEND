import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProProfilComponent } from './pro-profil.component';

describe('ProProfilComponent', () => {
  let component: ProProfilComponent;
  let fixture: ComponentFixture<ProProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
