import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth : AngularFireAuth) {
    this.user$ = afAuth.authState;
   }

    login(){
      this.afAuth.signInWithRedirect(new firebase.GoogleAuthProvider())
    }

    logout(){
      this.afAuth.signOut();
    }
}


