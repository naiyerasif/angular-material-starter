import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _darkTheme: Subject<Boolean> = new Subject<Boolean>();
  isDark = this._darkTheme.asObservable();

  toggleDarkTheme(isDark: Boolean) {
    this._darkTheme.next(isDark);
  }
}
