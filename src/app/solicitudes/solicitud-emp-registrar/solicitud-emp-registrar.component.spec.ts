import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudEmpRegistrarComponent } from './solicitud-emp-registrar.component';

describe('SolicitudEmpRegistrarComponent', () => {
  let component: SolicitudEmpRegistrarComponent;
  let fixture: ComponentFixture<SolicitudEmpRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudEmpRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudEmpRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
