import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-modelmember',
  templateUrl: 'modelmember.html',
})
export class ModelmemberPage {
  


  public bc : any;
  public mn : any;
  public email : any;
  public web : any;
  public con : any;
  public state : any;
  public zone : any;
  public city : any;
  public lom : any;

  public jt : any;
  public add : any;
  public dis : any;
  public pin : any;
  public dp : any;
  public bi : any;
  public bk : any;
  public pro : any;
  public nc : any;
  public name : any;
  public bn : any;

  
  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public callNumber: CallNumber, 
    public params: NavParams)
  {

  // bc,mn,email,web,con,state,zone,city,lom,  jt,add,dis,pin,dp,bi,bk,pro,nc

    this.bc = this.params.get("data");
    this.mn = this.params.get("data1");
    this.email = this.params.get("data2");
    this.web = this.params.get("data3");
    this.con = this.params.get("data4");
    this.state = this.params.get("data5");
    this.zone = this.params.get("data6");
    this.city = this.params.get("data7");
    this.lom = this.params.get("data8");

    this.jt = this.params.get("data9");
    this.add = this.params.get("data10");
    this.dis = this.params.get("data11");
    this.pin = this.params.get("data12");
    this.dp = this.params.get("data13");
    this.bi = this.params.get("data14");
    this.bk = this.params.get("data15");
    this.pro = this.params.get("data16");
    this.nc = this.params.get("data17");
    this.name = this.params.get("data18");
    this.bn = this.params.get("data19");
    console.log("name :",this.name)
    console.log("BN :",this.bn)


    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Model-MemberPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  call(number){
    console.log("number :",number);
    this.callNumber.callNumber(number, true)
  .then(
    res => console.log('Launched dialer!', res)
    )
  .catch(
    err => alert(err)
    );
  }
}
