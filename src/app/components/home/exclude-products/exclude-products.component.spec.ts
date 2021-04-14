import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludeProductsComponent } from './exclude-products.component';

describe('ExcludeProductsComponent', () => {
  let component: ExcludeProductsComponent;
  let fixture: ComponentFixture<ExcludeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcludeProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcludeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
