import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-statsmodal',
  templateUrl: 'statsmodal.html',
})
export class StatsmodalPage {

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public c4:any;
  public gg4:any;
  public ym4:any;
  public g4:any;  

  constructor(
    public navCtrl: NavController, 
    public loadingController: LoadingController,
    public http: Http, 
    public navParams: NavParams, 
    public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('StatsmodalPage');
    this.load();
  }

  async load(){

    const loading = await this.loadingController.create({
    });
    await loading.present();


    let body4: string = "?type=4",
    url4: any = this.baseURI + "get_meeting_data.php" + body4;
    this.http.get(url4).map(res => res.json()).subscribe(data4 => {
      loading.dismiss();
      console.log("4 data :",data4);
      this.c4 = data4[0].connect;
      this.gg4 = data4[0].gnote;    
      this.ym4 = data4[0].youandme;    
      this.g4 = data4[0].guest;    
     
    });
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
