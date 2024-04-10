import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Upg1Component } from './upg1.component';

describe('Upg1Component', () => {
  let component: Upg1Component;
  let fixture: ComponentFixture<Upg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Upg1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Upg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
