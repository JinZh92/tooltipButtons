import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tooltip-button',
  templateUrl: './tooltip-button.component.html',
  styleUrls: ['./tooltip-button.component.scss']
})
export class TooltipButtonComponent implements OnInit {

  @Input() currentIndex: number;
  @Input() isLast: boolean;
  @Input() showTooltip: boolean;
  @Output() buttonClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.showTooltip = false;
  }

  onClickButton() {
    this.showTooltip = true;
    this.buttonClicked.emit(this.currentIndex);
  }

}
