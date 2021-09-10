import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneDonnaServiziEsteticaComponent } from './sezione-donna-servizi-estetica.component';

describe('SezioneDonnaServiziEsteticaComponent', () => {
  let component: SezioneDonnaServiziEsteticaComponent;
  let fixture: ComponentFixture<SezioneDonnaServiziEsteticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezioneDonnaServiziEsteticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SezioneDonnaServiziEsteticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
