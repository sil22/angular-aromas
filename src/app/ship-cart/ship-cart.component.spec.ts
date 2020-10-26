import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipCartComponent } from './ship-cart.component';

describe('ShipCartComponent', () => {
  let component: ShipCartComponent;
  let fixture: ComponentFixture<ShipCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
