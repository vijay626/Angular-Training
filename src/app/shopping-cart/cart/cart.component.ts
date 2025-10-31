import { Component } from '@angular/core';
import { Item as CartItem } from '../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 cartItems = [
    { name: 'rose', price: 15, quantity: 2, image: '/assets/images/rose.jpg' },
    { name: 'lotus', price: 30, quantity: 4, image: '/assets/images/lotus.jpg' },
  ];
  totalAmount = 0;

  ngOnInit(): void {
    this.updateTotal();
  }
  constructor() {}

  loadCart() {}

   removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  // 🔄 Recalculate total when quantity changes
  getCartTotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  // 🧹 Clear all products
  clearCart() {
    this.cartItems = [];
  }

  // (Optional) update UI on manual quantity change
  updateTotal() {
    this.cartItems = [...this.cartItems];
  }
}