import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NossoTrabalhoComponent } from './nosso-trabalho.component';

describe('NossoTrabalhoComponent', () => {
  let component: NossoTrabalhoComponent;
  let fixture: ComponentFixture<NossoTrabalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NossoTrabalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NossoTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
