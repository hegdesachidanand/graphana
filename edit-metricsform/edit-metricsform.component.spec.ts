import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMetricsformComponent } from './edit-metricsform.component';

describe('EditMetricsformComponent', () => {
  let component: EditMetricsformComponent;
  let fixture: ComponentFixture<EditMetricsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMetricsformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMetricsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
