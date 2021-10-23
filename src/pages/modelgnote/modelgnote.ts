import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-modelgnote',
  templateUrl: 'modelgnote.html',
})
export class ModelgnotePage {
  myParam: string;
  public am : any;
  public bc : any;
  public com : any;
  public ct : any;

  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController, 
    public params: NavParams) {
      this.am = this.params.get("data");
      this.bc = this.params.get("data1");
      this.com = this.params.get("data2");
      this.ct = this.params.get("data3");
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelgnotePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
