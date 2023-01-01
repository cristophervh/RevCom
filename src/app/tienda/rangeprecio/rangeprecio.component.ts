import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";


@Component({
  selector: 'app-rangeprecio',
  templateUrl: './rangeprecio.component.html',
  styleUrls: ['./rangeprecio.component.css']
})
export class RangeprecioComponent implements OnInit {
  minValue: number = 50;
  maxValue: number = 5000;
  options: Options = {
    floor: 50,
    ceil: 5000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Precio Mínimo:</b> $" + value;
        case LabelType.High:
          return "<b>Precio Máximo:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
