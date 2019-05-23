import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-buttons-v1',
  templateUrl: './buttons-v1.component.html',
  styleUrls: ['./buttons-v1.component.scss']
})
export class ButtonsV1Component implements OnInit {

  public repeater: any[];
  public indexToShowTooltip: number;
  public size: number;

  constructor() { }

  ngOnInit() {
    this.size = 2;
    this.resetTooltips();
    this.repeater = Array(this.size);
  }

  onButtonClicked(index: number) {
    this.indexToShowTooltip = index;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEsc(event: KeyboardEvent) {
    console.log('Keyboard esc', event);
    this.resetTooltips();
  }

  /**
   * Hide all active tooltips
   */
  resetTooltips() {
    this.indexToShowTooltip = null;
  }
}
