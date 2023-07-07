export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 13 Pro',
    price: 999,
    description: '최고의 스마트폰',
  },
  {
    id: 2,
    name: 'iPhone 13 mini',
    price: 799,
    description: '한손에 딱',
  },
  {
    id: 3,
    name: 'iPhone 13',
    price: 899,
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
