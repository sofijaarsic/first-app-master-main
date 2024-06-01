import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthenticationService,
    public router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  // login(loginForm: NgForm) {
  //   if (loginForm.valid) {
  //     this.authService.logIn(loginForm.value).subscribe({
  //       next: (resData) => {
  //         this.router.navigateByUrl('/home/tabs/memos');
  //         console.log('login user');
  //         console.log(this.authService.user);
  //       },
  //       error: async (errRes) => {
  //         let message = 'Incorrect email or password';

  //         const alert = await this.alertCtrl.create({
  //           header: 'Authentication failed',
  //           message,
  //           buttons: ['Okay'],
  //         });
  //         await alert.present();
  //         loginForm.reset();
  //       },
  //     });
  //   }
  // }

  async login(loginForm: NgForm) {
    if (loginForm.valid) {
      const loading = await this.loadingCtrl.create({
        message: 'Logging in...',
      });
      await loading.present();

      this.authService.logIn(loginForm.value).subscribe({
        next: async (resData) => {
          await loading.dismiss();
          this.router.navigateByUrl('/home/tabs/memos');
          console.log('login user');
          console.log(this.authService.user);
        },
        error: async (errRes) => {
          await loading.dismiss();
          let message = 'Incorrect email or password';

          const alert = await this.alertCtrl.create({
            header: 'Authentication failed',
            message,
            buttons: ['Okay'],
          });
          await alert.present();
          loginForm.reset();
        },
      });
    }
  }
}
