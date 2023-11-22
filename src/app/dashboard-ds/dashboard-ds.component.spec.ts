import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDsComponent } from './dashboard-ds.component';

describe('DashboardDsComponent', () => {
  let component: DashboardDsComponent;
  let fixture: ComponentFixture<DashboardDsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDsComponent]
    });
    fixture = TestBed.createComponent(DashboardDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
