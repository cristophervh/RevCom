import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";


@Component({
  selector: 'app-rangeprecio',
  templateUrl: './rangeprecio.component.html',
  styleUrls: ['./rangeprecio.component.css']
})
export class RangeprecioComponent implements OnInit {
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
