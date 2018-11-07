import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialDependenciesModule } from './globals/module/material-dependencies/material-dependencies.module';

import { AppComponent } from './app.component';
import { ThemeService } from './globals/service/theme.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialDependenciesModule,
    AppRoutingModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
