import { Component } from '@angular/core';
import { NavController, NavParams, ToastController,ModalController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ModelmemberPage } from '../modelmember/modelmember';
import { Storage } from '@ionic/storage';
import { SearchKeyPage } from '../search-key/search-key';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public buisnessdata : any =[];
  public buisness_members : any=[] ;
  public hide : boolean = false ;
  searchKeyword: any;
  keyword: any = false;

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
  }

  ionViewDidLoad() {
    console.log('SearchPage');
    this.load();
  }

  load(){

    let
    url: any = this.baseURI + "get_business_category.php";
    this.http.get(url).map(res => res.json()).subscribe(data => {
          console.log("Business data :",data);
          this.buisnessdata = data;
    });

  }

  select(bc){

    this.hide = true;
    console.log("Selected ", bc.id);
    const loader = this.loadingCtrl.create({
      // duration: 3000,
      spinner:'dots'
    });
    loader.present();

    this.storage.get('jibmid').then((val)=>{

      var m_id = val;

    let body: string = "?category_id="+bc.id+"&m_id="+m_id,
      url: any = this.baseURI + "get_category_members.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
            this.buisness_members = data;
            if(data != null){
              loader.dismiss();
              this.buisness_members = data;
            console.log("Member data :",this.buisness_members);

            }else{
              loader.dismiss();
              this.buisness_members = null;
              const toast = this.toastController.create({
                message: 'No Members',
                position: 'bottom',
                duration:3000
              });
              toast.present();
            }

      });
    });


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

  searchKey(){
    console.log(this.searchKeyword);

    const loader = this.loadingCtrl.create({
      // duration: 3000,
      spinner:'dots'
    });
    loader.present();

    this.storage.get('jibmid').then((val)=>{

      var m_id = val;

    let body: string = "?m_id="+m_id+"&keyword="+this.searchKeyword,
      url: any = this.baseURI + "get_keyword_search.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
            console.log({data});
            if(data == null){
              const toast = this.toastController.create({
                message: 'There is no data Here',
                position: 'middle',
                duration: 3000
              });
              toast.present();
              loader.dismiss();

            } else {
              this.navCtrl.push(SearchKeyPage,{data: data});
              loader.dismiss();

            }
      });
    });



  }

  choose(type){
    this.keyword = type;
  }


}
