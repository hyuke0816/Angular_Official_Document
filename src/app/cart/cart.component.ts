import { Component } from '@angular/core';
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  constructor(
      private cartService: CartService,
      private formBuilder: FormBuilder
  ) {}

  /**
   * 주문로직구현
   */
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('주문이 완료되었습니다.', this.checkoutForm.value);
    this.checkoutForm.reset(); // 초기화
  }
}
