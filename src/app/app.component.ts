import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xelloTooltips';

  onKeyDown(event: KeyboardEvent) {
    console.log('---Keypress event:', event);
  }
}
