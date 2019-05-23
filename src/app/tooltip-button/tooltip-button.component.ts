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
  @Output() clickedOutside = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.showTooltip = false;
  }

  /**
   * Show tooltip for a button on click
   */
  onClickButton() {
    this.buttonClicked.emit(this.currentIndex);
  }

  /**
   * User clicked outside of the tooltip, emit event to close it.
   */
  onClickedOutside() {
    console.log('clicked outside - tooltip buttons');
    this.clickedOutside.emit();
  }

}
