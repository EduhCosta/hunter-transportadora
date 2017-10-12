import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacaOrcamentoComponent } from './faca-orcamento.component';

describe('FacaOrcamentoComponent', () => {
  let component: FacaOrcamentoComponent;
  let fixture: ComponentFixture<FacaOrcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacaOrcamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacaOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
