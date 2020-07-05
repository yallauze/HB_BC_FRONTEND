import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProProfilAdvertComponent } from './pro-profil-advert.component';

describe('ProProfilAdvertComponent', () => {
  let component: ProProfilAdvertComponent;
  let fixture: ComponentFixture<ProProfilAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProProfilAdvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProProfilAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
