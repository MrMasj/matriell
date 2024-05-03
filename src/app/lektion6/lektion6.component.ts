import { Component } from '@angular/core';

@Component({
  selector: 'app-lektion6',
  standalone: true,
  imports: [],
  templateUrl: './lektion6.component.html',
  styleUrl: './lektion6.component.scss'
})
export class Lektion6Component {
  greeting: string = '';
  message: string = '';
  public add(a: number, b: number): number {
    return a + b;
  }

  greet(name: string): string {
    this.greeting = `Hej, ${name}!`;
    return this.greeting;
  }

  async delayedMessage(): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.message = "Hello after delay";
        resolve(this.message);
      }, 500);
    });
  }

}
