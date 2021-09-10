import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneDonnaComponent } from './sezione-donna.component';

describe('SezioneDonnaComponent', () => {
  let component: SezioneDonnaComponent;
  let fixture: ComponentFixture<SezioneDonnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezioneDonnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SezioneDonnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
