import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  tally(targetType: string): number {
    let tallyTotal: number = 0;
    for (let i: number = 0; i < 1 ; i++){
      console.log(i)
      // if (this.satellites[i].type === targetType){
      //   tallyTotal ++;
      // }
      
      return tallyTotal;
    }
  }

}
