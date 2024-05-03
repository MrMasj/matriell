import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lektion6Component } from './lektion6.component';

describe('Lektion6Component', () => {
  let component: Lektion6Component;
  let fixture: ComponentFixture<Lektion6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lektion6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lektion6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 1 and 2 to get 3', () => {
    expect(component.add(1, 2)).toEqual(3);
    });
    
  it('should handle negative numbers correctly', () => {
  expect(component.add(-5, 3)).toEqual(-2);
  });

  it('should return "Hej, Alice!" when greeted with "Alice"', () => {
    expect(component.greet('Alice')).toEqual('Hej, Alice!');
  });

  it('should asynchronously return "Delayed Hello"', async () => {
    fixture.detectChanges(); // Start initial data binding and lifecycle hooks
    const message = await component.delayedMessage();
    expect(message).toEqual('Delayed Hello');
    expect(component.message).toEqual('Delayed Hello');
  });
});
