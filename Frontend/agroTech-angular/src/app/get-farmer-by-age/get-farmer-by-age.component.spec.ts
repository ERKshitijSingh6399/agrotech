import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFarmerByAgeComponent } from './get-farmer-by-age.component';

describe('GetFarmerByAgeComponent', () => {
  let component: GetFarmerByAgeComponent;
  let fixture: ComponentFixture<GetFarmerByAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFarmerByAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFarmerByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
