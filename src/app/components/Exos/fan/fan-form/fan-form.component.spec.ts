import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanFormComponent } from './fan-form.component';

describe('FanFormComponent', () => {
  let component: FanFormComponent;
  let fixture: ComponentFixture<FanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FanFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
