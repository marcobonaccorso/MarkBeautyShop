import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneDonnaServiziParrucchieriComponent } from './sezione-donna-servizi-parrucchieri.component';

describe('SezioneDonnaServiziParrucchieriComponent', () => {
  let component: SezioneDonnaServiziParrucchieriComponent;
  let fixture: ComponentFixture<SezioneDonnaServiziParrucchieriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezioneDonnaServiziParrucchieriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SezioneDonnaServiziParrucchieriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
