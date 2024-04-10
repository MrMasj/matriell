import { Component } from '@angular/core';

@Component({
  selector: 'app-lektion2',
  standalone: true,
  imports: [],
  templateUrl: './lektion2.component.html',
  styleUrl: './lektion2.component.scss'
})
export class Lektion2Component {

  private printUser(user: string, age: number): User {
    return { user: "Martin", age: 12 }
  }
}

export interface User {
  user: string;
  age: number;
}
