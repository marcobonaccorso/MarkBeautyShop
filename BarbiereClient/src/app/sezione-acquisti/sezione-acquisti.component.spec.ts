import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneAcquistiComponent } from './sezione-acquisti.component';

describe('SezioneAcquistiComponent', () => {
  let component: SezioneAcquistiComponent;
  let fixture: ComponentFixture<SezioneAcquistiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezioneAcquistiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SezioneAcquistiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
