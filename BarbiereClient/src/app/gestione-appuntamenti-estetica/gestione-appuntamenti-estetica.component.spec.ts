import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneAppuntamentiEsteticaComponent } from './gestione-appuntamenti-estetica.component';

describe('GestioneAppuntamentiEsteticaComponent', () => {
  let component: GestioneAppuntamentiEsteticaComponent;
  let fixture: ComponentFixture<GestioneAppuntamentiEsteticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneAppuntamentiEsteticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneAppuntamentiEsteticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
