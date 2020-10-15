import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Home } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  productHaveStock = [];
  private homes : Home[] = 
  [
    {
      //Processor
      id : 'r1',
      title: 'Intel Core-i7',
      imageUrl: ['https://c1.neweggimages.com/ProductImage/19-115-224-03.jpg','https://www.computeruniverse.net/images/600/90481673795008A32D4C43F1A039CFD3.jpg'],
      harga:'1.5000.000',
      stok:100,
      merek: 'Intel',
      model: 'Ada',
      base_clock: 'ada',
      boost_clock: 'ada',
      jumlah_core: 'ada',
      thread: 'ada',
      speed:null,
      ukuran:null,
      chipset:null,
      ditujukanuntukprosesorapa:null
    },
    {
      id : 'r2',
      title: 'Vgen 10600',
      imageUrl: ['https://tanscomputer.com/image/cache/data/Computer/ram/vgen-ddr3-pc-4gb-10600-12800-long-dimm-memory-ram-ddr3-640-550x582.jpg','https://war-com.com/20575-large_default/memory-laptop-ddr3-4gb-pc-10600.jpg'],
      harga:'405.000',
      stok:10,
      merek: 'Intel',
      model: 'ada',
      base_clock: null,
      boost_clock: null,
      jumlah_core: null,
      thread: null,
      speed:'ada',
      ukuran:'ada',
      chipset:null,
      ditujukanuntukprosesorapa:null
    },
    {
      id : 'r3',
      title: 'Asus Rog Strix Z490-E Gamming',
      imageUrl: ['https://c1.neweggimages.com/ProductImage/13-119-268-V01.jpg','https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/16/6090717/6090717_b1d20b0a-24a5-44d6-8ea5-fa67c0fd1881_500_500.jpg'],
      harga:'2.560.000',
      stok:20,
      merek: 'Intel',
      model: 'ada',
      base_clock: null,
      boost_clock: null,
      jumlah_core: null,
      thread: null,
      speed:null,
      ukuran:null,
      chipset:'ada',
      ditujukanuntukprosesorapa:'ada'
    },
    {
      id : 'r4',
      title: 'Nvidia GeForce RTX 3080',
      imageUrl: ['https://gadgetstechnews.com/wp-content/uploads/2020/07/158/the-designer-presented-his-vision-of-the-appearance-of-the-reference-geforce-rtx-3080-ti.jpg','https://dl.kaskus.id/i0.wp.com/rahasiatekno.com/wp-content/uploads/2020/06/NVIDIA-RTX-3080-Ti-Gunakan-16GB-VRAM-dengan-8192-Core-Benarkah.jpg?resize=682%2C359&ssl=1'],
      harga:'15.900.000',
      stok:40,
      merek: 'Intel',
      model: 'ada',
      base_clock: null,
      boost_clock: null,
      jumlah_core: null,
      thread: null,
      speed:null,
      ukuran:null,
      chipset:null,
      ditujukanuntukprosesorapa:null
    },
  ];
  constructor() { }

  
  getAllHomes(){
    this.productHaveStock = [];
    let j = 0;
    for (let i = 0 ; i < this.homes.length; i++){
      if (this.homes[i].stok > 0){
        this.productHaveStock[j] = this.homes[i];
        j++;
      }
    }
    return [...this.productHaveStock];
  }

  getHome(homeId: string){
    return{...this.homes.find(home=>{return home.id === homeId;
    })};
  }
  deleteHome(homeId: string){
    this.homes = this.homes.filter(home=>{
      return home.id !== homeId;
    });
  }
  addProduct(data: FormGroup){
    let DATA = {
      id: 'r' + (parseInt(this.homes[this.homes.length-1].id.substring(1))+1).toString(),
      title : data.value.title,
      imageUrl:[data.value.imageUrl1,data.value.imageUrl2],
      merek: data.value.merek,
      model: data.value.model,
      harga: data.value.harga,
      stok: data.value.stok,
      base_clock: data.value.base_clock,
      boost_clock: data.value.boost_clock,
      jumlah_core: data.value.jumlah_core,
      thread: data.value.thread,
      speed: data.value.speed,
      ukuran: data.value.ukuran,
      chipset: data.value.chipset,
      ditujukanuntukprosesorapa: data.value.ditujukanuntukprosesorapa,
    }
    this.homes.push(DATA);
  }
  editHome(homeId, editedHome){
    return {...this.homes.find(homes => {
        if (homes.id === homeId){
          homes.title = editedHome['editedNama'];
          homes.imageUrl = editedHome['editedImage'];
          homes.model = editedHome['editedModel'];
          homes.harga = editedHome['editedHarga'];
          homes.stok = editedHome['editedStok'];
          homes.base_clock = editedHome['editedbase_Clock'];
          homes.boost_clock = editedHome['editedboost_Clock'];
          homes.jumlah_core = editedHome['editedCore'];
          homes.thread = editedHome['editedThread'];
          homes.speed = editedHome['editedSpeed'];
          homes.ukuran = editedHome['editedukuran'];
          homes.chipset = editedHome['editedchipset'];
          homes.ditujukanuntukprosesorapa = editedHome['editedprocessor'];
        }
    })};
  }

}
