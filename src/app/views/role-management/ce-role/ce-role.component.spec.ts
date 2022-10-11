import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeRoleComponent } from './ce-role.component';

describe('CeRoleComponent', () => {
  let component: CeRoleComponent;
  let fixture: ComponentFixture<CeRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
