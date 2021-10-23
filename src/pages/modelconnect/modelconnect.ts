import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-modelconnect',
  templateUrl: 'modelconnect.html',
})
export class ModelconnectPage {

  public baseURI = "https://admin.jcombiz.com/jcom/";

  myParam: string;
  public ab : any;
  public ad : any;
  public bc : any;
  public com : any;
  public cn : any;
  public cs : any;
  public ct : any;
  public em : any;
  public mn : any;
  public meeting_type : any;
  public table_name : any;
  public t : any;
  public ci : any;
  
  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController, 
    public callNumber: CallNumber, 
    public params: NavParams,
    public storage: Storage,    
    public http: Http,
    private alertCtrl: AlertController )
  {

    console.log("MT:",this.params.get("data9"));
    console.log("TN:",this.params.get("data10"));
    this.ab = this.params.get("data");
    this.ad = this.params.get("data1");
    this.bc = this.params.get("data2");
    this.com = this.params.get("data3");
    this.cn = this.params.get("data4");
    this.cs = this.params.get("data5");
    this.ct = this.params.get("data6");
    this.em = this.params.get("data7");
    this.mn = this.params.get("data8");
    this.meeting_type = this.params.get("data9");
    this.table_name = this.params.get("data10");
    this.t = this.params.get("data11");
    this.ci = this.params.get("data12");
    console.log("MT:",this.meeting_type);
    console.log("TN:",this.table_name);
    console.log("T:",this.t);
    console.log("Connect ID:",this.ci);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelconnectPage');
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

  mark(){
    this.storage.get('jibmid').then((val)=>{

      var m_id = val;

    let body: string = "?connect_id="+this.ci,
      url: any = this.baseURI + "send_marku.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
        console.log({data});
        if(data[0].status == "Connect Marked Unsuccessfull"){

          let alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: data[0].status,
            buttons: [
              {
                text: 'OK',
                role: 'cancel',
                handler: () => {
                  console.log('Ok clicked');
                  this.viewCtrl.dismiss(true);
                }
              }
            ]
          });
          alert.present();

        }
      });
    });
  }
}
