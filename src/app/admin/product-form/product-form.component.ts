import { ProductServiceService } from './../../product-service.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAction, AngularFireObject, AngularFireList } from '@angular/fire/compat/database';
import * as firebase from 'firebase/app'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public categories$ : any;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductServiceService) {
   this.categories$= this.categoryService.getCategories();
  }

  save(product: any) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);

  }

  ngOnInit(): void {
  }

}
