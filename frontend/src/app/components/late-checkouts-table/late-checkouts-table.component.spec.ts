import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateCheckoutsTableComponent } from './late-checkouts-table.component';

describe('LateCheckoutsTableComponent', () => {
  let component: LateCheckoutsTableComponent;
  let fixture: ComponentFixture<LateCheckoutsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateCheckoutsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateCheckoutsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
