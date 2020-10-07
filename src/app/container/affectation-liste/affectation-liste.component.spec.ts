import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationListeComponent } from './affectation-liste.component';

describe('AffectationListeComponent', () => {
  let component: AffectationListeComponent;
  let fixture: ComponentFixture<AffectationListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
