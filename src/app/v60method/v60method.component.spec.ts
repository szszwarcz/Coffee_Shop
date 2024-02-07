import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V60methodComponent } from './v60method.component';

describe('V60methodComponent', () => {
  let component: V60methodComponent;
  let fixture: ComponentFixture<V60methodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V60methodComponent]
    });
    fixture = TestBed.createComponent(V60methodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
