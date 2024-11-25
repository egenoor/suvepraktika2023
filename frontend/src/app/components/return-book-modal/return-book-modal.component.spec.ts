import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnBookModalComponent } from './return-book-modal.component';

describe('ReturnBookModalComponent', () => {
  let component: ReturnBookModalComponent;
  let fixture: ComponentFixture<ReturnBookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnBookModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
