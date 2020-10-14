import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(
    public snackbar: MatSnackBar,
    private zone: NgZone,) {
  }


  error(message: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['custom-snackbar-error'];
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'right';
    config.duration = 2000;
    this.zone.run(() => {
      this.snackbar.open(message, null, config);
    });
  }

  info(message: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['custom-snackbar-info'];
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'right';
    config.duration = 2000;
    this.zone.run(() => {
      this.snackbar.open(message, null, config);
    });
  }
}
