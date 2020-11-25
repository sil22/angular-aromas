import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AromasProductsComponent } from './aromas-products.component';

describe('AromasProductsComponent', () => {
  let component: AromasProductsComponent;
  let fixture: ComponentFixture<AromasProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AromasProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AromasProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
