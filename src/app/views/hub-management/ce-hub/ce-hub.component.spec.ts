import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeHubComponent } from './ce-hub.component';

describe('CeHubComponent', () => {
  let component: CeHubComponent;
  let fixture: ComponentFixture<CeHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
