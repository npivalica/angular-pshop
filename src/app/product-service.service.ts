import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private db: AngularFireDatabase) { }

  create(product: unknown){
    return this.db.list('/products').push(product);
  }

  getAll() : Observable<any[]>{
    return this.db.list('/products').valueChanges();
  }


  getProduct(productId: string){
    return this.db.object('/products/' + productId)
  }
}
