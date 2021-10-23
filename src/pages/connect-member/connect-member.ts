import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { GnotePage } from '../gnote/gnote';

@Component({
  selector: 'page-connect-member',
  templateUrl: 'connect-member.html',
})
export class ConnectMemberPage {


  public baseURI = "https://admin.jcombiz.com/jcom/";
  to_id: string;
  connectlist: any;


  constructor(
    public navCtrl: NavController, 
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public http: Http,
    public storage: Storage,    
    public navParams: NavParams) {

      this.to_id = this.navParams.get("data");
      console.log("Member Id 2:",this.to_id);
      
  }

  ionViewDidLoad() {
    console.log('ConnectMemberPage');
    this.load();
  }

  load(){
    this.storage.get('jibmid').then((val) => {

      var m_id = val;

      let body: string = "?m_id=" + m_id + "&to_member_id="+this.to_id,
        type: string = "application/x-www-form-urlencoded; charset=UTF-8",
        // headers: any = new Headers({ 'Content-Type': type }),
        url: any = this.baseURI + "get_connect_member.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {

        this.connectlist = data;
        console.log("Connect Member Data : ",this.connectlist);

      });
    });
  }

  onChangeHandler(event: string) {
    console.log("select event",event);
    this.navCtrl.setRoot(GnotePage,{data:event})
  }

}
