import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams } from 'ionic-angular';
import { ModelgnotePage } from '../modelgnote/modelgnote';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-hgnote',
  templateUrl: 'hgnote.html',
})
export class HgnotePage {

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public hgnotelist : any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public storage: Storage,    
    public http: Http,  ) {
  }


  ionViewDidLoad() {
    console.log('HgnotePage');
    this.load();
    
  }
  modal(am,bc,com,ct) {
    this.modalCtrl.create(ModelgnotePage, {data:am,data1:bc,data2:com,data3:ct}, { cssClass: 'inset-modal' })
    .present();
  }


  load(){

    this.storage.get('jibmid').then((val)=>{

      var m_id = val;

    let body: string = "?m_id="+m_id,
      url: any = this.baseURI + "get_gnote_list.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
            this.hgnotelist = data;
            console.log("Hgnotelist data :",this.hgnotelist);
            
      });
    });

  }

}
