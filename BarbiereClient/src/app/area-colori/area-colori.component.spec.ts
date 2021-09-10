import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaColoriComponent } from './area-colori.component';

describe('AreaColoriComponent', () => {
  let component: AreaColoriComponent;
  let fixture: ComponentFixture<AreaColoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaColoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaColoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
