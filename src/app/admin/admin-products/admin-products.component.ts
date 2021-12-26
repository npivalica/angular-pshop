import { ProductServiceService } from './../../product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$ : any;

  constructor(private productService: ProductServiceService) {
    this.products$ = this.productService.getAll();
  }

  ngOnInit(): void {
  }

}
