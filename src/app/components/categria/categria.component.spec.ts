import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategriaComponent } from './categria.component';

describe('CategriaComponent', () => {
  let component: CategriaComponent;
  let fixture: ComponentFixture<CategriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
