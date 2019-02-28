import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentListingComponent } from './recent-listing.component';

describe('RecentListingComponent', () => {
  let component: RecentListingComponent;
  let fixture: ComponentFixture<RecentListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
