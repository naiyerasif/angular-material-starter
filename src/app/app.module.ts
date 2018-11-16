import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ThemePickerModule } from "./module/theme-picker";

import { MaterialDependenciesModule } from './module/material-dependencies/material-dependencies.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDependenciesModule,
    AppRoutingModule,
    ThemePickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
