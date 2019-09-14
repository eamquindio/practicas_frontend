import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCensoComponent } from './reporte-censo.component';

describe('ReporteCensoComponent', () => {
  let component: ReporteCensoComponent;
  let fixture: ComponentFixture<ReporteCensoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteCensoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCensoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
