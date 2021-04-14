import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsLimitsComponent } from './clients-limits.component';

describe('ClientsLimitsComponent', () => {
  let component: ClientsLimitsComponent;
  let fixture: ComponentFixture<ClientsLimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsLimitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
