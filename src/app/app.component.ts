import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './globals/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Material Starter';
  tagline = 'A simple starter project for Angular Material 6';
  features = [
      'Angular Material 6',
      'Polyfills for IE',
      'Native Font Stack (instead of Roboto)',
      'Material Design Icons',
      'SCSS for theme customization',
      'Dependency Module to load Material Components'
  ];
  isDark: Observable<Boolean>;

  ngOnInit(): void {
    this.isDark = this.themeService.isDark;
  }

  constructor(private themeService: ThemeService) { }

  toggleDarkTheme(checked: Boolean) {
    this.themeService.toggleDarkTheme(checked);
  }
}
