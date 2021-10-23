import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-profilemodal',
  templateUrl: 'profilemodal.html',
})
export class ProfilemodalPage {

  public base64Image: any;
  public baseURI = "https://admin.jcombiz.com/jcom/";
  public address: any;
  public info: any;
  public keyword: any;
  public product: any;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,
    public http: Http,
    public storage: Storage,
    public viewCtrl: ViewController,
    params: NavParams) {

  }

  ionViewDidLoad() {
    console.log(' profilemodalPage');
    this.load();
  }

  load() {
    this.storage.get('jibmid').then((val) => {

      var m_id = val;

      let
        body: string = "?m_id=" + m_id,
        url: any = this.baseURI + "get_member_details.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
        // this.profiledata = data;
        this.address = data[0].address;
        this.info = data[0].business_info;
        this.keyword = data[0].business_keywords;
        this.product = data[0].products;


      });
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  save() {

    this.storage.get('jibmid').then((val) => {

      var m_id = val;

      console.log("address :", this.address);
      console.log("info :", this.info);
      console.log("keyword :", this.keyword);
      console.log("product :", this.product);

      const loading = this.loadingCtrl.create({
      });
      loading.present();

      let body: string = "?m_id=" + m_id + "&address="+this.address + "&business_info=" + this.info + "&business_keywords=" + this.keyword + "&products=" + this.product,
        url: any = this.baseURI + "send_member_details.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
        console.log("Result :", data);
        if (data[0].status == "success") {
          this.toast();
          loading.dismiss();
        }
      });
    });


  }

  toast() {
    const toast = this.toastController.create({
      message: 'Success',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'OK'
    });
    toast.present();
  }

}


