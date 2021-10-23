import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { LoginPage } from '../login';

/**
 * Generated class for the ForgetmodelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgetmodel',
  templateUrl: 'forgetmodel.html',
})
export class ForgetmodelPage {

  public baseURI = "https://admin.jcombiz.com/jcom/";
  meeting_type: any = [];
  meetingType: any;
  number: any;

  constructor(
    public navCtrl: NavController, 
    public loadingController: LoadingController,
    public navParams: NavParams,
    public http: Http,
    public viewCtrl: ViewController,
    public toastController: ToastController) {
      this.load();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetmodelPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  load(){
    const loading = this.loadingController.create({
    });
    loading.present();

    let
    type1: string = "application/x-www-form-urlencoded; charset=UTF-8",
    url1: any = this.baseURI + "get_meeting_type.php";
    this.http.get(url1).map(res => res.json()).subscribe(data1 => {
      console.log("get_zone data :", data1);
      this.meeting_type = data1;
      loading.dismiss();
    });
  }

  forgetsend() {

    console.log("Num1 : ", this.number , this.meetingType);

    const loading = this.loadingController.create({
    });
    loading.present();

    let body: string = "?mobile_no=" + this.number + "&meeting_type=" + this.meetingType,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      url: any = this.baseURI + "forget_password.php" + body;
    this.http.get(url).map(res => res.json()).subscribe(data => {

      const toast = this.toastController.create({
        message: data[0].message,
        position: 'bottom',
        duration: 6000
      });
      toast.present();

      loading.dismiss();
      this.navCtrl.setRoot(LoginPage);
    });

  }

}
