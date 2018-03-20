import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ProductModel } from './list-product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  @Input() listProduct: Array<ProductModel>;
  @Output() changeList: EventEmitter<Array<ProductModel>> = new EventEmitter<Array<ProductModel>>();

  emitEvent() {
    this.listProduct = this.listProduct.reverse();
    this.changeList.emit(this.listProduct);
  }
}
