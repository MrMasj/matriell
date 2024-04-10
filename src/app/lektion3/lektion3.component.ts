import { Component } from '@angular/core';
import { AuthenticatedUser, ID, User, Vehicle } from './upg1/dto/type.dto';
import { Upg1Component } from './upg1/upg1.component';
import { Upg2Component } from './upg2/upg2.component';
import { Upg3Component } from './upg3/upg3.component';

@Component({
  selector: 'app-lektion3',
  standalone: true,
  imports: [Upg1Component,Upg2Component,Upg3Component],
  templateUrl: './lektion3.component.html',
  styleUrl: './lektion3.component.scss'
})
export class Lektion3Component {

  constructor() {

  }

  
}
