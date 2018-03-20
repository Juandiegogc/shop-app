import { Injectable } from '@angular/core';
import { ProductModel } from './list-product/list-product.model';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {

  private products: Array<ProductModel> = [
    {
      id: 1,
      description: 'Description of the product 1'
    },
    {
      id: 2,
      description: 'Description of the product 2'
    },
    {
      id: 3,
      description: 'Description of the product 3'
    },
    {
      id: 4,
      description: 'Description of the product 4'
    },
    {
      id: 5,
      description: 'Description of the product 5'
    }
  ];

  contructor() {
  }

  getProducts(): Array<ProductModel> {
    return this.products;
  }



}
