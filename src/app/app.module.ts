import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipButtonComponent } from './tooltip-button/tooltip-button.component';
import { ButtonsV1Component } from './buttons-v1/buttons-v1.component';
import { TooltipBoxComponent } from './tooltip-box/tooltip-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipButtonComponent,
    ButtonsV1Component,
    TooltipBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
