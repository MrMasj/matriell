import { Component } from '@angular/core';

@Component({
  selector: 'app-lektion7',
  standalone: true,
  imports: [],
  templateUrl: './lektion7.component.html',
  styleUrl: './lektion7.component.scss'
})
export class Lektion7Component {
  private items: string[] = [];
    /**
     * Lägger till en vara i listan.
     * @param itemName Namnet på varan att lägga till.
     */
    addItem(itemName: string): void {
      if (!this.items.includes(itemName)) {
          this.items.push(itemName);
      }
  }

  /**
   * Tar bort en vara från listan.
   * @param itemName Namnet på varan att ta bort.
   */
  removeItem(itemName: string): void {
      const index = this.items.indexOf(itemName);
      if (index > -1) {
          this.items.splice(index, 1);
      }
  }

  /**
   * Kontrollerar om en specifik vara finns i listan.
   * @param itemName Namnet på varan att kontrollera.
   * @returns {boolean} Returnerar true om varan finns, annars false.
   */
  contains(itemName: string): boolean {
      return this.items.includes(itemName);
  }

  /**
   * Räknar antalet varor i listan.
   * @returns {number} Antalet varor i listan.
   */
  countItems(): number {
      return this.items.length;
  }
}
