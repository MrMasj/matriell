import { Component } from '@angular/core';

@Component({
  selector: 'app-upg2',
  standalone: true,
  imports: [],
  templateUrl: './upg2.component.html',
  styleUrl: './upg2.component.scss'
})
export class Upg2Component {
  public wrapInArray<T>(value: T): T[] {
    return [value];
  }
  public numberArray = this.wrapInArray(10);
  public stringArray = this.wrapInArray("Hello");
  public objectArray = this.wrapInArray({ name: "Anna", age: 30 });

}
