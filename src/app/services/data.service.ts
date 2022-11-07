import {Injectable} from '@angular/core';
import {NbuStatService} from "./nbu-stat.service";
import {Currency} from "../shared/models/model";
import {BehaviorSubject, observable, Observable, Subject, switchMap, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly nbuStat$: Observable<Currency[]>;

  readonly firstValue$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  readonly secondValue$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private nbuStatService: NbuStatService) {
    this.nbuStat$ = timer(0, 600000).pipe(
      switchMap(() => {
        return this.nbuStatService.getCourses();
      })
    );
  }
}
