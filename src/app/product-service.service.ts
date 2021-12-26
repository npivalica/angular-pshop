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
}
