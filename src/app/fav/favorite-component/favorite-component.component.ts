import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FavoriteService } from 'src/app/service/favorite.service';
import { Memo } from 'src/memo.model';

@Component({
  selector: 'app-favorite-component',
  templateUrl: './favorite-component.component.html',
  styleUrls: ['./favorite-component.component.scss'],
})
export class FavoriteComponentComponent implements OnInit {
  @Input() id: string;

  userId: any;
  title: string;
  content: string;
  createdAt: any;
  formattedDate: any;
  memos: Memo[] = [];
  memo: Memo;

  constructor(
    private modalCtrl: ModalController,
    private favService: FavoriteService
  ) {}

  ngOnInit() {
    this.favService.getMemoById(this.id).subscribe((res) => {
      console.log('ngOnInit');

      console.log(res.id);
      this.memo = res;
    });
  }
}
