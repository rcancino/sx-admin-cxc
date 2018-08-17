import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable ,  of } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Injectable()
export class AntiguedadGuard implements CanActivate {
  constructor(private store: Store<fromStore.AntiguedadDeSaldoState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getAntiguedadLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadAntiguedadAction());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
