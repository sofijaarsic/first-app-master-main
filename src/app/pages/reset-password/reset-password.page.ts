import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { catchError, of } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email: any;
  constructor(
    public route: Router,
    public authService: AuthenticationService,
    public alertController: AlertController
  ) {}

  ngOnInit() {}
  async resetPassword() {
    if (!this.email) {
      this.showAlert('Error', 'Please enter a valid email address.');
      return;
    }

    this.authService
      .resetPassword(this.email)
      .pipe(
        catchError(() => {
          this.showAlert(
            'Error',
            'An error occurred while resetting the password. Please try again.'
          );
          return of(null);
        })
      )
      .subscribe((response: any) => {
        if (response && response.error) {
          this.showAlert('Error', response.error);
        } else {
          this.showAlert(
            'Success',
            'Password reset email sent. Please check your inbox.'
          );
          this.route.navigate(['/login']).catch(() => {});
        }
      });
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
