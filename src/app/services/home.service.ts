import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  access: boolean = false;
  active: number = 1;

  pageAccess: Subject<boolean> = new Subject<boolean>();
  pageActive: Subject<number> = new Subject<number>();

  constructor () {
    this.pageAccess.subscribe((value) => {
      this.access = value
    });
    this.pageActive.subscribe((value) => {
      this.active = value
    });
  }

  getAccess(value: boolean) {
    this.pageAccess.next(value);
  }

  getActive(value: number) {
    this.pageActive.next(value);
  }
}
