import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfElseDirectiveComponent } from './ng-if-else-directive.component';

describe('NgIfElseDirectiveComponent', () => {
  let component: NgIfElseDirectiveComponent;
  let fixture: ComponentFixture<NgIfElseDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfElseDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfElseDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
