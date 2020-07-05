import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertDetailDisplayComponent } from './advert-detail-display.component';

describe('AdvertDetailDisplayComponent', () => {
  let component: AdvertDetailDisplayComponent;
  let fixture: ComponentFixture<AdvertDetailDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertDetailDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertDetailDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
