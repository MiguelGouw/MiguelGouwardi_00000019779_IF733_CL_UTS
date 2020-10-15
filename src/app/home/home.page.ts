import { IonItemSliding } from '@ionic/angular';
import { HomeService } from './home.service';
import { Home } from './home.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  homes: Home[];
  public tooglegrid: boolean = true;
  constructor(private homesService: HomeService) {}
  ngOnInit() {
    this.homes = this.homesService.getAllHomes();
  }
  share(homes: Home, SlidingItem: IonItemSliding){
    SlidingItem.close();
    console.log('Share',homes.title,'To social media');
  }
  grid(){
    this.tooglegrid = !this.tooglegrid;
  }
  ionViewWillEnter(){
    this.homes = this.homesService.getAllHomes();
  }
}
