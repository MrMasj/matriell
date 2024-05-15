import { Component } from '@angular/core';
import { Lektion2Service } from './lektion2.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lektion2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lektion2.component.html',
  styleUrl: './lektion2.component.scss'
})
export class Lektion2Component {

  public input: string = ""
  constructor(public lektionService: Lektion2Service) {
    this.lektionService.namn = "hejsan";
  }

  private printUser(user: string, age: number): User {
    return { user: "Martin", age: 12 }
  }
}

export interface User {
  user: string;
  age: number;
}
