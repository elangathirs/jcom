import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modelyou',
  templateUrl: 'modelyou.html',
})
export class ModelyouPage {
  myParam: string;
  public place :any;
  public comm : any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,public params: NavParams) {
    this.myParam = params.get('myParam');
    this.place = this.params.get("data");
    this.comm = this.params.get("data1");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelyouPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
