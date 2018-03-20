import { Component } from '@angular/core';
import { ProductModel } from './shared/list-product/list-product.model';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public header: string;
  public products: Array<ProductModel>;

  constructor(private _dataService: DataService) {
    this.header = 'Welcome to Shop App';
    this.products = [];
  }

  changeList(productsArray: Array<ProductModel>) {
    this.products = productsArray;
  }

  loadProducts() {
    this.products = this._dataService.getProducts();
  }

  emptyProducts() {
    this.products = [];
  }

}
