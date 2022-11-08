import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-rangeventa',
  templateUrl: './rangeventa.component.html',
  styleUrls: ['./rangeventa.component.css']
})
export class RangeventaComponent implements OnInit {
  value: number = 50;
  highValue: number = 5000;
  options: Options = {
    floor: 5,
    ceil: 5000
  };

  constructor() { }

  ngOnInit(): void {
  }

}
