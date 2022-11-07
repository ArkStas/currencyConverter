import { Component, OnInit } from '@angular/core';
import {Currency} from "../../shared/models/model";
import {map} from "rxjs";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-converter-header',
  templateUrl: './converter-header.component.html',
  styleUrls: ['./converter-header.component.scss']
})
export class ConverterHeaderComponent implements OnInit {

  currEurUsd: any;

  constructor(private  dataService: DataService) { }

  ngOnInit(): void {
    this.currEurUsd = this.dataService.nbuStat$.pipe(
      map((currencyArray: Array<Currency>) =>
        currencyArray.filter(
          (currency: Currency) => currency.cc === 'USD' || currency.cc === 'EUR'
        )
      )
    );
  }

}
