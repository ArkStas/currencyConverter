import {Component} from '@angular/core';
import {DataService} from "./services/data.service";
import {Currency} from "./shared/models/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currencyConverter';

  firstAmount: number = 0;
  secondAmount: number = 0;

  firstCurrency: Currency = undefined;
  secondCurrency: Currency = undefined;

  constructor(readonly dataService: DataService) {
  }

  firstAmountChange(event: number) {
    this.dataService.firstValue$.next(event);
    this.firstChange();
  }

  firstCurrencyChange(event: Currency) {
    this.firstCurrency = event;
    this.firstChange();
  }

  firstChange() {
    if (this.firstCurrency !== undefined && this.secondCurrency !== undefined) {
      const curAmount = this.dataService.firstValue$.getValue();
      if (curAmount === 0) {
        this.secondChange();
      } else {
        const amount = (this.dataService.firstValue$.getValue() * this.firstCurrency.rate) / this.secondCurrency.rate;
        this.secondAmount = Number(amount.toFixed(4));
      }
    }
  }

  secondAmountChange(event: number) {
    this.dataService.secondValue$.next(event);
    this.secondChange();
  }

  secondCurrencyChange(event: Currency) {
    this.secondCurrency = event;
    this.secondChange();
  }

  secondChange() {
    if (this.firstCurrency !== undefined && this.secondCurrency !== undefined) {
      const curAmount = this.dataService.secondValue$.getValue();
      if (curAmount === 0) {
        this.firstChange();
      } else {
        const amount = (this.dataService.secondValue$.getValue() * this.secondCurrency.rate) / this.firstCurrency.rate;
        this.firstAmount = Number(amount.toFixed(4))
      }
    }
  }

}
