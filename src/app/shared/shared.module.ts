import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { ListProductComponent } from './list-product/list-product.component';
import { DataService } from './data.service';
import { ProductPipe } from './product/product.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    ListProductComponent,
    ProductPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    ListProductComponent,
    CommonModule,
    FormsModule,
    ProductPipe
  ],
  providers: [DataService],
})
export class SharedModule { }
