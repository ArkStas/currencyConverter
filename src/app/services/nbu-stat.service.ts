import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Currency} from "../shared/models/model";


@Injectable({
  providedIn: 'root'
})
export class NbuStatService {

  constructor(private http: HttpClient) {
  }

  getCourses(): Observable<Currency[]> {
    return this.http.get<Currency[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
  }

}
