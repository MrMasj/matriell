import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Upg2Component } from './upg2.component';

describe('Upg2Component', () => {
  let component: Upg2Component;
  let fixture: ComponentFixture<Upg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Upg2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Upg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
