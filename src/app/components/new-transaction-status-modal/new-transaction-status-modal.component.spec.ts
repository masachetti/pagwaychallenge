import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionStatusModalComponent } from './new-transaction-status-modal.component';

describe('NewTransactionStatusModalComponent', () => {
  let component: NewTransactionStatusModalComponent;
  let fixture: ComponentFixture<NewTransactionStatusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTransactionStatusModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransactionStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
