import { HomeService } from 'src/app/home/home.service';


import { Component, OnInit } from '@angular/core';
import { Home } from '../home/home.model';
import { AlertController, IonItemSliding, LoadingController, ToastController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  admin: Home[];
  public tooglegrid: boolean = true;
  private router: Router;
  private toastController: ToastController;
  private alertController: AlertController;
  public loadingController: LoadingController;
  
  constructor(private adminService: HomeService) {}
  ngOnInit() {
    this.admin = this.adminService.getAllHomes();
  }
  IonViewWillEnter(){
    this.admin = this.adminService.getAllHomes();
  }
  
  delete(){
    this.admin = this.adminService.getAllHomes();
  }
  deletedata(id, SlidingItem: IonItemSliding){
    SlidingItem.close();
    this.adminService.deleteHome(id);
    this.delete();
  }
  
  edit(id, SlidingItem: IonItemSliding){
    SlidingItem.close();
    this.router.navigate(['/edit/id']);
  }
  ionViewWillEnter(){
    this.admin = this.adminService.getAllHomes();
  }
  

  // deletedata(adminId, slidingItems){

  //   this.presentLoading().then(() => {
  //     this.adminService.deleteadmin(adminId);
  //     slidingItems.close();
  //     this.router.navigate(['admin']);
  //     this.deleteToast();
  //     this.ionViewWillEnter();
  //   });
  // }


  // async confirmDelete(admins: Home, slidingItems: IonItemSliding) {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Delete Item',
  //     message: 'Kamu Yakin Ingin Menghapus Produk ini ?',
  //     buttons: [
  //       {
  //         text: 'No',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //       },
  //       {
  //         text: 'Yes',
  //         handler: () => this.deletedata(admins.id, slidingItems)
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

  // async deleteToast() {
  //   const toast = await this.toastController.create({
  //     message: 'Produk Berhasil di Hapus.',
  //     duration: 2000,
  //     color: 'success'
  //   });
  //   toast.present();
  // }

  // async presentLoading(){
  //   const loading = await this.loadingController.create({
  //     message: 'Deleting Product . . .',
  //     duration: 2000
  //   });
  //   await loading.present();

  //   const { role, data } = await loading.onDidDismiss();

  // }

  // ionViewWillEnter(){
  //   this.admin = this.adminService.getAlladmin();
  // }

  
}
