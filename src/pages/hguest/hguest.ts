import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-hguest',
  templateUrl: 'hguest.html',
})
export class HguestPage {

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public guest_history : any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public storage: Storage,    
    public http: Http  ) {
  }

  ionViewDidLoad() {
    console.log('HguestPage');
    this.load();

  }


  load(){

    this.storage.get('jibmid').then((val)=>{

      var m_id = val;

    let body: string = "?m_id="+m_id,
      url: any = this.baseURI + "get_guest_history.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
            this.guest_history = data;
            console.log("Hconnect data :",this.guest_history);
            
      });
    });

  }

  // modal(ab,ad,bc,com,cn,cs,ct,em,mn) {
  //   this.modalCtrl.create(ModelconnectPage, 
  //     {data:ab,data1:ad,data2:bc,data3:com,data4:cn,data5:cs,data6:ct,data7:em,data8:mn}, { cssClass: 'inset-modal' })
  //   .present();
  // }


}
