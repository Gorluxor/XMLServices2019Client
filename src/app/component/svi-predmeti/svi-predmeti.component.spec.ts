import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SviPredmetiComponent } from './svi-predmeti.component';

describe('SviPredmetiComponent', () => {
  let component: SviPredmetiComponent;
  let fixture: ComponentFixture<SviPredmetiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SviPredmetiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SviPredmetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
