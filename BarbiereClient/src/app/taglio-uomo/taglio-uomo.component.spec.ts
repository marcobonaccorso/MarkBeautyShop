import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglioUomoComponent } from './taglio-uomo.component';

describe('TaglioUomoComponent', () => {
  let component: TaglioUomoComponent;
  let fixture: ComponentFixture<TaglioUomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaglioUomoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaglioUomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
