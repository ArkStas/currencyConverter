import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Currency} from "../../shared/models/model";

@Component({
  selector: 'app-converter-currency-view',
  templateUrl: './converter-currency-view.component.html',
  styleUrls: ['./converter-currency-view.component.scss']
})
export class ConverterCurrencyViewComponent implements OnInit {

  @Input() inAmount: number = 0;

  @Output() outAmount = new EventEmitter<number>();
  @Output() outCurrency = new EventEmitter<Currency>();

  constructor(readonly dataService: DataService) {
  }

  ngOnInit(): void {
  }

  onChangeCurrency(event: any) {
    console.log(event.value);
    this.outCurrency.emit(event.value);
  }

  onChangeAmount(event: any) {
    const amount = Number(event.target.value);
    if (amount !== this.inAmount) {
      this.outAmount.emit(amount);
    }
  }

}
