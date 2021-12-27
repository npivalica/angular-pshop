import { CategoryService } from './../category.service';
import { ProductServiceService } from './../product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$;
  categories$;

  constructor(private productService: ProductServiceService, private categoryService:CategoryService) {
    this.products$ = productService.getAll();
    this.categories$ = categoryService.getAll();
  }




}
