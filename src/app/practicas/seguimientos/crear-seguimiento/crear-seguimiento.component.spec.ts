import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSeguimientoComponent } from './crear-seguimiento.component';

describe('CrearSeguimientoComponent', () => {
  let component: CrearSeguimientoComponent;
  let fixture: ComponentFixture<CrearSeguimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSeguimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
