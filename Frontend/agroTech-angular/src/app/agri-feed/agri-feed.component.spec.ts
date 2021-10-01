import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriFeedComponent } from './agri-feed.component';

describe('AgriFeedComponent', () => {
  let component: AgriFeedComponent;
  let fixture: ComponentFixture<AgriFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
