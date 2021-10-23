import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams } from 'ionic-angular';
import { ModelyouPage } from '../modelyou/modelyou';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-hyou',
  templateUrl: 'hyou.html',
})
export class HyouPage {

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public hyoumelist : any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public storage: Storage,    
    public http: Http,) {
  }

  ionViewDidLoad() {
    console.log('HyouPage');
    this.load();    
  }

  load(){

    this.storage.get('jibmid').then((val)=>{

      var m_id = val;

    let body: string = "?m_id="+m_id,
      url: any = this.baseURI + "get_youandme_list.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
            this.hyoumelist = data;
            console.log("Hgnotelist data :",this.hyoumelist);
            
      });
    });

  }

  modal(plc,com) {
    this.modalCtrl.create(ModelyouPage, {data:plc,data1:com}, { cssClass: 'inset-modal' })
    .present();
  }


}
