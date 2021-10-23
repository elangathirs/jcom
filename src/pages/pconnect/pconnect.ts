import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ModelconnectPage } from '../modelconnect/modelconnect';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-pconnect',
  templateUrl: 'pconnect.html',
})
export class PconnectPage {

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public hconnectlist : any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public storage: Storage,    
 
    public http: Http,   ) {
  }

  ionViewDidLoad() {
    console.log('HconnectPage');
    this.load();
  }

  load(){

    this.storage.get('jibmid').then((val)=>{

      var m_id = val;

    let body: string = "?m_id="+m_id,
      url: any = this.baseURI + "get_pending_connect.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
            this.hconnectlist = data;
            console.log("Hconnect data :",this.hconnectlist);
      });
    });

  }

  modal(ab,ad,bc,com,cn,cs,ct,em,mn,mt,tn,t,ci) {
    console.log("Types:",mt,tn,ab);
    let model = this.modalCtrl.create(ModelconnectPage, 
      {data:ab,data1:ad,data2:bc,data3:com,data4:cn,data5:cs,data6:ct,data7:em,data8:mn,
      data9:mt,data10:tn,data11:t,data12:ci}, { cssClass: 'inset-modal' });
      model.onDidDismiss(data => {
        console.log(data);
        if(data == true){
          this.load();
        }
      });
    model.present();
    
  }

}
