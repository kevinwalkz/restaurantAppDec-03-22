import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantComponent } from './view-restaurant.component';

describe('ViewRestaurantComponent', () => {
  let component: ViewRestaurantComponent;
  let fixture: ComponentFixture<ViewRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
