import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarConvocatoriaComponent } from './cerrar-convocatoria.component';

describe('CerrarConvocatoriaComponent', () => {
  let component: CerrarConvocatoriaComponent;
  let fixture: ComponentFixture<CerrarConvocatoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerrarConvocatoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerrarConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
