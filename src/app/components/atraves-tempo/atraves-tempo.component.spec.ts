import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtravesTempoComponent } from './atraves-tempo.component';

describe('AtravesTempoComponent', () => {
  let component: AtravesTempoComponent;
  let fixture: ComponentFixture<AtravesTempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtravesTempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtravesTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
