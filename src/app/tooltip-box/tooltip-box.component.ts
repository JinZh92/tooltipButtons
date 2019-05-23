import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tooltip-box',
  templateUrl: './tooltip-box.component.html',
  styleUrls: ['./tooltip-box.component.scss']
})
export class TooltipBoxComponent implements OnInit, AfterViewInit  {

  @Input() currentIndex: number;
  @Output() clickedOutside = new EventEmitter<any>();
  @ViewChild('tooltipRef') tooltipRef: ElementRef;

  public showAtBottom: boolean;
  public isLoading: boolean;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.reposition();
      this.isLoading = false;
    }, 0);
  }

  @HostListener('window:scroll', [])
  reposition() {
      const innerHeight: number = window.innerHeight;
      const rect: DOMRect = this.tooltipRef.nativeElement.getBoundingClientRect();
      const distance = innerHeight - rect.bottom;
      // If it's close to the top edge, show at bottom;
      // if it's close to the bottom edge, show on top.
      if ((!this.showAtBottom && rect.top < 10) ||
        (this.showAtBottom && distance < 10)) {
        this.showAtBottom = !this.showAtBottom;
      }
  }

  @HostListener('document:click', ['$event.target'])
  onDomClick(target: EventTarget) {
    const clickedInside = this.tooltipRef.nativeElement.contains(target);
    console.log(clickedInside);

    if (!this.isLoading && !clickedInside) {
      this.clickedOutside.emit();
    }
  }

}
