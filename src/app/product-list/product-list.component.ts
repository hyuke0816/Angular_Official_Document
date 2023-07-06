import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // products = products;

  products = [...products];

  share() {
    window.alert('해당 상품이 공유되었습니다!');
  }

  onNotify() {
    window.alert('상품이 세일할 때 알람이 울릴것');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
