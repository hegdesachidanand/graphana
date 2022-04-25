import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsFormComponent } from './metrics-form.component';

describe('MetricsFormComponent', () => {
  let component: MetricsFormComponent;
  let fixture: ComponentFixture<MetricsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
