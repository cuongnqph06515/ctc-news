import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportManagementComponent } from './export-management.component';

describe('ExportManagementComponent', () => {
  let component: ExportManagementComponent;
  let fixture: ComponentFixture<ExportManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
