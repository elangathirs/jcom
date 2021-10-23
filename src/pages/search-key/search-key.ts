import { Component } from '@angular/core';
import { NavController, NavParams, ToastController,ModalController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ModelmemberPage } from '../modelmember/modelmember';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SearchKeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search-key',
  templateUrl: 'search-key.html',
})
export class SearchKeyPage {
  public baseURI = "https://admin.jcombiz.com/jcom/";
  public buisnessdata : any =[];
  public buisness_members : any=[] ;
  public memberslist : any=[] ;
  public member : any;
  public hide : boolean = false ;
  searchKeyword: any;
  keyword: any = false;
  buisness : any;
  ports: any = [];
  port: any;
  public myInput: any;
  items: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public http: Http) {
    this.memberslist = this.navParams.data.data;
    this.items = this.navParams.data.data;
    console.log("memberslist:",this.memberslist);

    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' }
  ];

  }

  portChange(event) {
    console.log('port:', event.value);
}

initializeItems() {
  this.memberslist = this.items;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchKeyPage');
  }

  select(bc){

    console.log("Business:",this.buisness);

    this.hide = true;
    console.log("Selected ", bc);
    this.buisness_members = [bc]
    // const loader = this.loadingCtrl.create({
    //   spinner:'dots'
    // });
    // loader.present();
    // this.storage.get('jibmid').then((val)=>{
    //   var m_id = val;
    // let body: string = "?category_id="+bc.id+"&m_id="+m_id,
    //   url: any = this.baseURI + "get_category_members.php" + body;
    //   this.http.get(url).map(res => res.json()).subscribe(data => {
    //         this.buisness_members = data;
    //         if(data != null){
    //           loader.dismiss();
    //           this.buisness_members = data;
    //         console.log("Member data :",this.buisness_members);
    //         }else{
    //           loader.dismiss();
    //           this.buisness_members = null;
    //           const toast = this.toastController.create({
    //             message: 'No Members',
    //             position: 'bottom',
    //             duration:3000
    //           });
    //           toast.present();
    //         }
    //   });
    // });


  }

  modal(bc,mn,email,web,con,state,zone,city,lom,jt,add,dis,pin,dp,bi,bk,pro,nc,name,bn) {
    console.log("Name1 :",name);
    console.log("BN1 :",bn)

    this.modalCtrl.create(ModelmemberPage,
      {data:bc,data1:mn,data2:email,data3:web,
       data4:con,data5:state,data6:zone,data7:city,
       data8:lom,data9:jt,data10:add,data11:dis,
       data12:pin,data13:dp,data14:bi,data15:bk,
       data16:pro,data17:nc,data18:name,data19:bn},{ cssClass: 'inset-modal' })
    .present();
  }

  onInput(ev){
    console.log({ev},this.myInput);

    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.memberslist = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }



  }

  onCancel(ev){
    console.log({ev},this.myInput);
  }

}
