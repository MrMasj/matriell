import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lektion2Component } from './lektion2/lektion2.component';
import { Lektion3Component } from './lektion3/lektion3.component';
import { FormsModule } from '@angular/forms';
import { Lektion4Component } from './lektion4/lektion4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, Lektion2Component, Lektion3Component, Lektion4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'avancerad-javascript';
}
