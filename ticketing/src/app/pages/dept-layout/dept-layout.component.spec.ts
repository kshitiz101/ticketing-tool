import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptLayoutComponent } from './dept-layout.component';

describe('DeptLayoutComponent', () => {
  let component: DeptLayoutComponent;
  let fixture: ComponentFixture<DeptLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptLayoutComponent]
    });
    fixture = TestBed.createComponent(DeptLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
