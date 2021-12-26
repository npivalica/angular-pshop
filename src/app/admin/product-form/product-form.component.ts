import { ProductServiceService } from './../../product-service.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAction, AngularFireObject, AngularFireList } from '@angular/fire/compat/database';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public categories$;

  constructor(private categoryService: CategoryService, private productService: ProductServiceService) {
   this.categories$= this.categoryService.getCategories();
  }

  save(product: any) {
    this.productService.create(product);

  }

  ngOnInit(): void {
  }

}
