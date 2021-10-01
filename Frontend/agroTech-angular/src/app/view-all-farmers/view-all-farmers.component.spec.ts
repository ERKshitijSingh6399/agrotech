import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllFarmersComponent } from './view-all-farmers.component';

describe('ViewAllFarmersComponent', () => {
  let component: ViewAllFarmersComponent;
  let fixture: ComponentFixture<ViewAllFarmersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllFarmersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllFarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
