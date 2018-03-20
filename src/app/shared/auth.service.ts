import { Injectable } from '@angular/core';
import { ProductModel } from './list-product/list-product.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private isLogged: boolean;

  constructor() {
    this.isLogged = false;
  }

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }

  checkLogged() {
    return this.isLogged;
  }

}
