import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPrenotazioniComponent } from './area-prenotazioni.component';

describe('AreaPrenotazioniComponent', () => {
  let component: AreaPrenotazioniComponent;
  let fixture: ComponentFixture<AreaPrenotazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPrenotazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
