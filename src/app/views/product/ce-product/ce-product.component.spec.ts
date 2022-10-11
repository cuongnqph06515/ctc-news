import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeProductComponent } from './ce-product.component';

describe('CeProductComponent', () => {
  let component: CeProductComponent;
  let fixture: ComponentFixture<CeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
