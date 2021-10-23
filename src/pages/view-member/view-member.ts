import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ModelmemberPage } from '../modelmember/modelmember';

@Component({
  selector: 'page-view-member',
  templateUrl: 'view-member.html',
})
export class ViewMemberPage {

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public memberlist : any = [];
  public t_id : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public toastController: ToastController,
    public storage: Storage,    
    public http: Http ) {
      this.t_id = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ViewMemberPage');
    this.load();
  }

  load(){

    this.storage.get('jibmid').then((val)=>{
      const loader = this.loadingCtrl.create({
        // duration: 3000,
        spinner:'dots'
      });
      loader.present();

      var m_id = val;

    let body: string = "?table_id="+this.t_id+"&m_id="+m_id,
      url: any = this.baseURI + "get_jib_table_members.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
            this.memberlist = data;
            if(this.memberlist != null){
              console.log("Member data :",this.memberlist);
              loader.dismiss();
            }else{
              loader.dismiss();
              this.memberlist = null;  
              const toast = this.toastController.create({
                message: 'No Members',
                position: 'bottom',
                duration:3000
              });
              toast.present();

            }
            
      });
    });

  }

  // bc,mn,email,web,con,state,zone,city,lom,jt,add,dis,pin,dp,bi,bk,pro,nc


  modal(bc,mn,email,web,con,state,zone,city,lom,jt,add,dis,pin,dp,bi,bk,pro,nc,name,bn) {
    console.log("Name1 :",name);
    console.log("BN1 :",bn)

    this.modalCtrl.create(ModelmemberPage, 
      {data:bc,data1:mn,data2:email,data3:web,
       data4:con,data5:state,data6:zone,data7:city,
       data8:lom,data9:jt,data10:add,data11:dis,
       data12:pin,data13:dp,data14:bi,data15:bk,
       data16:pro,data17:nc,data18:name,data19:bn},{ cssClass: 'inset-modal' })
    .present();
  }



}
