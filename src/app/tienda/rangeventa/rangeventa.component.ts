import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";



@Component({
  selector: 'app-rangeventa',
  templateUrl: './rangeventa.component.html',
  styleUrls: ['./rangeventa.component.css']
})
export class RangeventaComponent implements OnInit {
  minValue: number = 0;
  maxValue: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Mínimo de Ventas:</b> " + value;
        case LabelType.High:
          return "<b>Máximo de Ventas:</b> " + value;
        default:
          return "" + value;
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
