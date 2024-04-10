import { Component } from '@angular/core';
import { Product } from './dto/type.dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upg3',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './upg3.component.html',
  styleUrl: './upg3.component.scss'
})
export class Upg3Component {
  newProduct: Product = { id: 0, name: '', price: 0, category: '' };
  products: Product[] = [];

  constructor() {}

  public addProduct(): void {
    this.products.push({...this.newProduct});
    this.newProduct = { id: 0, name: '', price: 0, category: '' }; // Rensa formuläret
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }
}
