import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewingMethodsComponent } from './brewing-methods.component';

describe('BrewingMethodsComponent', () => {
  let component: BrewingMethodsComponent;
  let fixture: ComponentFixture<BrewingMethodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrewingMethodsComponent]
    });
    fixture = TestBed.createComponent(BrewingMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
