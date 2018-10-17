import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsBannerComponent } from './cs-banner.component';

describe('CsBannerComponent', () => {
  let component: CsBannerComponent;
  let fixture: ComponentFixture<CsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
