import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoriasPage } from './historias.page';

describe('HistoriasPage', () => {
  let component: HistoriasPage;
  let fixture: ComponentFixture<HistoriasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
