import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseClientsComponent } from './choose-clients.component';

describe('ChooseClientsComponent', () => {
  let component: ChooseClientsComponent;
  let fixture: ComponentFixture<ChooseClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
