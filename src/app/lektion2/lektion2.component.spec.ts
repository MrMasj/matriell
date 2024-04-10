import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lektion2Component } from './lektion2.component';

describe('Lektion2Component', () => {
  let component: Lektion2Component;
  let fixture: ComponentFixture<Lektion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lektion2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lektion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
