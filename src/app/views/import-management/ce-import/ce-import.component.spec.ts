import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeImportComponent } from './ce-import.component';

describe('CeImportComponent', () => {
  let component: CeImportComponent;
  let fixture: ComponentFixture<CeImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
