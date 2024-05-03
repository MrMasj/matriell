import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-lektion5',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './lektion5.component.html',
  styleUrl: './lektion5.component.scss'
})
export class Lektion5Component {
  inputString: string = '';
  inputChar: string = '';
  result: number = 0;

  dataList: user[] = [];

  originalList: any[] = [1, 2, 3, 4, 5];  // Exempellista, kan ändras eller bindas dynamiskt
  reversedList: any[] = [];
  constructor(private http: HttpClient) {
    this.asyncFetchData();
    this.syncfetchData();

  }

  public pipeFetchData(): Observable<user[]> {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users');
  }

  public asyncFetchData() {
    this.http.get<user[]>('https://jsonplaceholder.typicode.com/users').subscribe(value => {
      this.dataList = value;
      console.log(value);
    });
  }

  public async syncfetchData() {
    let value = await firstValueFrom(this.http.get('https://jsonplaceholder.typicode.com/users'));
    console.log(value);
  }

  public countChar(str: string, char: string): number {
    // Base case: Om strängen är tom, returnera 0
    if (str.length === 0) {
      return 0;
    }

    // Rekursivt räkna förekomster
    let count = this.countChar(str.slice(1), char);
    if (str[0] === char) {
      count++;
    }

    return count;
  }

  public reverseList(list: any[]): any[] {
    if (list.length === 0) {
      return [];
    } else {
      return this.reverseList(list.slice(1)).concat(list[0]);
    }
  }

  public reverse() {
    this.reversedList = this.reverseList(this.originalList);
  }

}

export interface user {
  company: Object;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}
