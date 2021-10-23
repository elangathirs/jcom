import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { HyouPage } from '../hyou/hyou';


import { SelectSearchableComponent } from 'ionic-select-searchable';

class Port {
  public id: number;
  public name: string;
}


@Component({
  selector: 'page-you',
  templateUrl: 'you.html',
})

export class YouPage {

  today = new Date().toISOString();
  public minDate = "2019-01-01";
  public maxDate = this.today ;

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public memberslist : any = [];
  public member : any;
  public place : any;
  public mydate : any;
  public comment : any;
  

  constructor(
    public navCtrl: NavController, 
    public storage: Storage,    
    public http: Http,   
    public alertCtrl: AlertController,          
    public loadingController: LoadingController,
    public toastController: ToastController,   
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('You&Me Page');
    this.load(); 
  }

  load(){

    this.storage.get('jibmid').then((val)=>{

      var m_id = val;

    let body: string = "?m_id="+m_id,
    type: string = "application/x-www-form-urlencoded; charset=UTF-8",
    // headers: any = new Headers({ 'Content-Type': type }),
    url: any = this.baseURI + "get_member_list.php" + body;
    this.http.get(url).map(res => res.json()).subscribe(data => {
          this.memberslist = data;
          console.log("Members data :",this.memberslist);
          
    });
   });
    
  }

  confirm(){

    if(this.member == null){
      const toast = this.toastController.create({
        message: 'Choose the Member',
        position: 'bottom',
        duration:2000
      });
      toast.present();
    } else if(this.place == null){
      const toast = this.toastController.create({
        message: 'Fill the Place',
        position: 'bottom',
        duration:2000        
      });
      toast.present();
    } else if(this.mydate == null){
      const toast = this.toastController.create({
        message: 'Choose the Date',
        position: 'bottom',
        duration:2000        
      });
      toast.present();
    } else if(this.comment == null){
      const toast = this.toastController.create({
        message: 'Fill Topics of Conversation',
        position: 'bottom',
      });
      toast.present();
    } else {

      this.storage.get('jibmid').then((val)=>{

        var m_id = val;

      console.log("Member :",this.member);
      console.log("place :",this.place);
      console.log("date :",this.mydate);  
      console.log("coments :",this.comment);    
      
      const loading =  this.loadingController.create({
        // message: "Hellooo",
      });
      loading.present();
      
      let body: string = "?m_id="+m_id+"&to_member_id="+this.member.id+"&date="+ this.mydate +"&place="
      + this.place + "&comments=" + this.comment ,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      // headers: any = new Headers({ 'Content-Type': type }),
      url: any = this.baseURI + "send_youandme.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
        console.log("Result :",data);
        if(data[0].status == "success"){
          this.toast();
          loading.dismiss();
        }
      });
      });
      

    }

  }

  toast(){
    this.member = null;
    this.place = null;
    this.mydate = null;
    this.comment = null;
    
    const alert = this.alertCtrl.create({
      title: 'Success',
      buttons: ['OK']
    });
    alert.present();
  }


  hconnect(){
    this.navCtrl.push(HyouPage);
  }

}
