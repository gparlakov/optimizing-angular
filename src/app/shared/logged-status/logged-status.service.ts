import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedStatusService {
  status$ = new BehaviorSubject<string>(null);


  onLogged(name: string) {
    this.status$.next(name);
  }

  onLoggedOut() {
    this.status$.next(null);
  }
}
