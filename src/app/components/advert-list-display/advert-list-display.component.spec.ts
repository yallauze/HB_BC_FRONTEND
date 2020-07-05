import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertListDisplayComponent } from './advert-list-display.component';

describe('AdvertListDisplayComponent', () => {
  let component: AdvertListDisplayComponent;
  let fixture: ComponentFixture<AdvertListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
