import { UserService } from './user.service';
import { Observable, of} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/auth';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { switchMap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private userService: UserService) {
    this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.signInWithRedirect(new firebase.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.signOut();
  }

  get appUser$(): Observable<any> {
    return this.user$
      .pipe(switchMap(user => {
        if (user) return this.userService.get(user.uid);
        return of(null)
      }))

  }
}


