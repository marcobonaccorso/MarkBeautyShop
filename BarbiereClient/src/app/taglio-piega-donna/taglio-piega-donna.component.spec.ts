import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglioPiegaDonnaComponent } from './taglio-piega-donna.component';

describe('TaglioPiegaDonnaComponent', () => {
  let component: TaglioPiegaDonnaComponent;
  let fixture: ComponentFixture<TaglioPiegaDonnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaglioPiegaDonnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaglioPiegaDonnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
