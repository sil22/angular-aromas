import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AromasAboutComponent } from './aromas-about.component';

describe('AromasAboutComponent', () => {
  let component: AromasAboutComponent;
  let fixture: ComponentFixture<AromasAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AromasAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AromasAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
