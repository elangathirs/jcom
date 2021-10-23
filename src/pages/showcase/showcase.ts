import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AlertController, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HshowPage } from '../hshow/hshow';

@Component({
  selector: 'page-showcase',
  templateUrl: 'showcase.html',
})
export class ShowcasePage {
  mode_data: any = [];
  public baseURI = "https://admin.jcombiz.com/jcom/";
  date: any;
  title: any;
  mode: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public alertCtrl: AlertController,

    public http: Http,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,) {
  }

  ionViewDidLoad() {
    console.log('ShowcasePage');
    this.load();

  }

  load() {

    const loader = this.loadingCtrl.create({
      // duration: 3000,
      spinner: 'dots'
    });
    loader.present();

    let
      // body: string = "?m_id=" + m_id,
      url: any = this.baseURI + "get_mode.php";

    this.http.get(url).map(res => res.json()).subscribe(data => {
      this.mode_data = data;
      if (this.mode_data != null) {
        loader.dismiss();
        console.log("full");
      }
      console.log("Profile data :", this.mode_data);
    });

  }

  confirm() {
    console.log("date :", this.date);
    console.log("title :", this.title);
    console.log("mode :", this.mode);

    if (this.date == undefined || this.date == null) {

      const toast = this.toastController.create({
        message: 'Choose date',
        position: 'bottom',
        duration: 2000,
        closeButtonText: 'OK'
      });
      toast.present();

    } else if (this.title == undefined || this.title == null) {

      const toast = this.toastController.create({
        message: 'Enter Title',
        position: 'bottom',
        duration: 2000,
        closeButtonText: 'OK'
      });
      toast.present();

    } else if (this.mode == undefined || this.mode == null) {

      const toast = this.toastController.create({
        message: 'Choose mode',
        position: 'bottom',
        duration: 2000,
        closeButtonText: 'OK'
      });
      toast.present();

    } else {
      this.storage.get('jibmid').then((val) => {

        var m_id = val;

        const loader = this.loadingCtrl.create({
          spinner: 'dots'
        });
        loader.present();

        let postdata = {
          m_id: m_id,
          date: this.date,
          title: this.title,
          mode: this.mode
        },
          url: any = this.baseURI + "send_showcase.php";

        this.http.post(url,postdata).map(res => res.json()).subscribe(data => {
          if (data[0].status == "success") {

            this.toast();

            loader.dismiss();
          } else {
            alert("Failed");
          }
          console.log("Profile data :", this.mode_data);
        });

        // let
        //   body: string = "?m_id=" + m_id + "&date=" + this.date + "&title=" + this.title + "&mode=" + this.mode,
        //   url: any = this.baseURI + "send_showcase.php" + body;

        // this.http.get(url).map(res => res.json()).subscribe(data => {
        //   if (data[0].status == "success") {
        //     loader.dismiss();
        //   }else{
        //     alert("Failed");
        //   }
        //   console.log("Profile data :", this.mode_data);
        // });

      });

    }

  }

  toast() {
    this.date = null;
    this.title = null;
    this.mode = null;

    const alert = this.alertCtrl.create({
      title: 'Success',
      buttons: ['OK']
    });
    alert.present();
  }


  hshow(){
    this.navCtrl.push(HshowPage);
  }

}
