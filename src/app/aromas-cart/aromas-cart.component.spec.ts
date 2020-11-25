import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AromasCartComponent } from './aromas-cart.component';

describe('ShipCartComponent', () => {
  let component: AromasCartComponent;
  let fixture: ComponentFixture<AromasCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AromasCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AromasCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
