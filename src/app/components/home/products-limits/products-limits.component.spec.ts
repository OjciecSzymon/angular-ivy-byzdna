import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLimitsComponent } from './products-limits.component';

describe('ProductsLimitsComponent', () => {
  let component: ProductsLimitsComponent;
  let fixture: ComponentFixture<ProductsLimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLimitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
