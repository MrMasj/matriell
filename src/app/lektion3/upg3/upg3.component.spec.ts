import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Upg3Component } from './upg3.component';

describe('Upg3Component', () => {
  let component: Upg3Component;
  let fixture: ComponentFixture<Upg3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Upg3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Upg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
