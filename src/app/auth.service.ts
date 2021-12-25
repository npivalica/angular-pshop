import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/auth';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth : AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
   }

    login(){
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl', returnUrl);
      this.afAuth.signInWithRedirect(new firebase.GoogleAuthProvider())
    }

    logout(){
      this.afAuth.signOut();
    }
}


