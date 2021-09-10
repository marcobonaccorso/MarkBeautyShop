import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneAppuntamentoParrucchiereComponent } from './gestione-appuntamento-parrucchiere.component';

describe('GestioneAppuntamentoParrucchiereComponent', () => {
  let component: GestioneAppuntamentoParrucchiereComponent;
  let fixture: ComponentFixture<GestioneAppuntamentoParrucchiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneAppuntamentoParrucchiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneAppuntamentoParrucchiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
