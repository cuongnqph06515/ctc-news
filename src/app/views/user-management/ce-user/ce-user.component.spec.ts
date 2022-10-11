import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeUserComponent } from './ce-user.component';

describe('CeUserComponent', () => {
  let component: CeUserComponent;
  let fixture: ComponentFixture<CeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
