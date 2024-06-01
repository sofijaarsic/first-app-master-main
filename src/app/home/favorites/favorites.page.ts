import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { FavoriteComponentComponent } from 'src/app/fav/favorite-component/favorite-component.component';
import { MemoComponent } from 'src/app/memo/memo.component';
import { FavoriteService } from 'src/app/service/favorite.service';
import { Memo } from 'src/memo.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  userId: any;
  title: string;
  content: string;
  createdAt: any;
  formattedDate: any;
  memos: Memo[];
  memosSub: Subscription;

  constructor(
    private authService: AuthenticationService,
    private favService: FavoriteService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.memosSub = this.favService.favorites.subscribe((memos) => {
      this.memos = memos;
      console.log('ngOnInitfav');
      console.log(this.memos);
      this.memos.forEach((memo) => {
        this.formattedDate = moment(memo.createdAt).format(
          'YYYY-MM-DD HH:mm:ss'
        );
        console.log(this.formattedDate);
        memo.createdAt = this.formattedDate;
      });
    });
  }
  async openMemo(memo: Memo) {
    console.log(memo.id);
    const modal = await this.modalCtrl.create({
      component: FavoriteComponentComponent,
      componentProps: { id: memo.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.6,
    });
    await modal.present();
  }
  ionViewWillEnter() {
    console.log('viewwillenter');
    this.favService.getMemos().subscribe();
  }
  ngOnDestroy() {
    console.log('onDestroy');

    if (this.memosSub) {
      this.memosSub.unsubscribe();
    }
  }
}
