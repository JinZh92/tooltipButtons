import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons-v1',
  templateUrl: './buttons-v1.component.html',
  styleUrls: ['./buttons-v1.component.scss']
})
export class ButtonsV1Component implements OnInit {

  public repeater: any[];
  public indexToShowTooltip: number;

  @Input() size: string;

  constructor() { }

  ngOnInit() {
    this.repeater = Array(parseInt(this.size, 10));
    console.log('---', this.repeater);
  }

  onButtonClicked(index: number) {
    console.log('---before assign', this.indexToShowTooltip);
    this.indexToShowTooltip = index;
  }

}
