import { Component } from '@angular/core';
import { User, AuthenticatedUser, Vehicle, ID } from './dto/type.dto';

@Component({
  selector: 'app-upg1',
  standalone: true,
  imports: [],
  templateUrl: './upg1.component.html',
  styleUrl: './upg1.component.scss'
})
export class Upg1Component {
  public user: User = {
    id: 1,
    name: "Anna Svensson",
    email: "anna@example.com"
  };
  public authUser: AuthenticatedUser = {
    id: 2,
    name: "Erik Johansson",
    email: "erik@example.com",
    authToken: "token123"
  };

  public myCar: Vehicle = {
    make: "Volvo",
    model: "XC90",
    year: 2020
  };

  public userId: ID = 101;        // Nummer
  public productId: ID = "XYZ123"; // Sträng
}
