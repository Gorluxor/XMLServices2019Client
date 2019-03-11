import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajPredmetComponent } from './dodaj-predmet.component';

describe('DodajPredmetComponent', () => {
  let component: DodajPredmetComponent;
  let fixture: ComponentFixture<DodajPredmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajPredmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajPredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
