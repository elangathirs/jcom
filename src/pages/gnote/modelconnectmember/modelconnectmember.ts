import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-modelconnectmember',
  templateUrl: 'modelconnectmember.html',
})
export class ModelconnectmemberPage {

  public baseURI = "https://admin.jcombiz.com/jcom/";
  to_id: string;
  connectlist: any;
  // connect_id: string;
  data: any = null;
  // connect_name: string;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public http: Http,
    public storage: Storage,
    public navParams: NavParams)
  {
    this.to_id = this.navParams.get("data");
    console.log("Member Id 2:",this.to_id);

  }

  ionViewDidLoad() {
    console.log('Model connect Member Page');
    this.load();
  }

  dismiss() {
    if(this.data != null){
      this.viewCtrl.dismiss(this.data);
      console.log("data:",this.data);
    }else{
      const toast = this.toastController.create({
        message: 'Please Select Any Connect Member',
        position: 'bottom',
        duration: 2000
      });
      toast.present();

    }

  }

  close(){
    this.viewCtrl.dismiss();
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
    this.data = event;
    // this.connect_id = data;
    console.log("split :", this.data);
    // this.connect_id = this.data[0];
    // this.connect_name = this.data[1];


  }


}
