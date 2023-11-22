import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDEComponent } from './dashboard-de.component';

describe('DashboardDEComponent', () => {
  let component: DashboardDEComponent;
  let fixture: ComponentFixture<DashboardDEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDEComponent]
    });
    fixture = TestBed.createComponent(DashboardDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
