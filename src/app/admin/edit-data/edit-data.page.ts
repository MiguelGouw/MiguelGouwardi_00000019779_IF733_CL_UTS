import { Home } from './../../home/home.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.page.html',
  styleUrls: ['./edit-data.page.scss'],
})
export class EditDataPage implements OnInit {

  loadedEditedHome: Home;

  private productEdit = {
    editedtitle: '',
    editedImg1: '',
    editedImg2: '',
    editedmodel: '',
    editedharga: 0,
    editedstok: 0,
    editedbase_clock: 0,
    editedboost_clock: 0,
    editedjumlah_core: 0,
    editedthread: 0,
    editedspeed: 0,
    editedUiuran: 0,
    editedchipset: '',
    editedditujukanuntukprosesorapa: '',
  };

  constructor(
      private activatedRoute: ActivatedRoute,
      private homeservice: HomeService,
      private router: Router,
      private toastController: ToastController,
      private alertController: AlertController,
      public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('adminsId')) { return; }
      const homeId = paramMap.get('adminsId');
      this.loadedEditedHome = this.homeservice.getHome(homeId);

      this.productEdit['editednama'] = this.loadedEditedHome.title;
      this.productEdit['editedImage1'] = this.loadedEditedHome.imageUrl[0];
      this.productEdit['editedImage2'] = this.loadedEditedHome.imageUrl[1];
      this.productEdit['editedModel'] = this.loadedEditedHome.model;
      this.productEdit['editedHarga'] = this.loadedEditedHome.harga;
      this.productEdit['editedStok'] = this.loadedEditedHome.stok;
      this.productEdit['editedbase_Clock'] = this.loadedEditedHome.base_clock;
      this.productEdit['editedboost_Clock'] = this.loadedEditedHome.boost_clock;
      this.productEdit['editedCore'] = this.loadedEditedHome.jumlah_core;
      this.productEdit['editedThread'] = this.loadedEditedHome.thread;
      this.productEdit['editedSpeed'] = this.loadedEditedHome.speed;
      this.productEdit['editedukuran'] = this.loadedEditedHome.ukuran;
      this.productEdit['editedchipset'] = this.loadedEditedHome.chipset;
      this.productEdit['editedprocessor'] = this.loadedEditedHome.ditujukanuntukprosesorapa;

    })
  }

  editHome(){
    this.presentLoading().then(() => {
      this.homeservice.editHome(this.loadedEditedHome.id, this.productEdit)
      this.router.navigate(['/admin']);
      this.editToast();
    });
    
  }


  async confirmEdit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Item',
      message: 'Save Changes ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Yes',
          handler: () => this.editHome()
        }
      ]
    });

    await alert.present();
  }

  async editToast() {
    const toast = await this.toastController.create({
      message: 'Produk Berhasil di Ubah.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: 'Updating Product . . .',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

  }


}
