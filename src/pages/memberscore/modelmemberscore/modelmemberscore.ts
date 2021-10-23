import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-modelmemberscore',
  templateUrl: 'modelmemberscore.html',
})
export class ModelmemberscorePage {
  scoredata: any;

  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController,   
    public navParams: NavParams)
  {
      this.scoredata = this.navParams.get('data');
      console.log("score data on model :",this.scoredata);
  }

  ionViewDidLoad() {
    console.log('model member score Page');
  }


  close(){
    this.viewCtrl.dismiss();
  }



}
