import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInstrumentoComponent } from './agregar-instrumento.component';

describe('AgregarInstrumentoComponent', () => {
  let component: AgregarInstrumentoComponent;
  let fixture: ComponentFixture<AgregarInstrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarInstrumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
