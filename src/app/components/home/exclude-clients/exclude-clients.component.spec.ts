import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludeClientsComponent } from './exclude-clients.component';

describe('ExcludeClientsComponent', () => {
  let component: ExcludeClientsComponent;
  let fixture: ComponentFixture<ExcludeClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcludeClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcludeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
