// export interface Product {
//   title: string,
//   price: number,
//   category: string,
//   imageUrl: string
// }


import { ProductServiceService } from './../../product-service.service';
import { CategoryService } from './../../category.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public categories$ : any;
  public product: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductServiceService) {
   this.categories$= this.categoryService.getAll();

   let id= this.route.snapshot.paramMap.get('id'); //I don't get why it's undefined
   if (id) this.productService.getProduct(id).valueChanges().subscribe(p => this.product = p);
  }

  save(product: any) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);

  }

  ngOnInit(): void {
  }

}
