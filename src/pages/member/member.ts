
import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ViewMemberPage } from '../view-member/view-member';

@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public dislist : any = [];
  public myInput: any;
  items: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public storage: Storage,

    public http: Http, ) {
  }

  ionViewDidLoad() {
    console.log('MemberPage');
    this.load();
  }

  initializeItems() {
    this.dislist = this.items;
  }

  load(){

    this.storage.get('jibmid').then((val)=>{

      var m_id = val;

    let body: string = "?m_id="+m_id,
      url: any = this.baseURI + "get_jib_table.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
            this.dislist = data;
            this.items = data;
            console.log("dis data :",this.dislist);

      });
    });

  }

  view(tid){
    console.log({tid})
    // console.log("Table Id :",event.value.table_id);
    // this.navCtrl.push(ViewMemberPage,{data:event.value.table_id});
    console.log("Table Id :",tid);
    this.navCtrl.push(ViewMemberPage,{data:tid});
  }

  onInput(ev){
    console.log({ev},this.myInput);

    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.dislist = this.items.filter((item) => {
        return (item.table_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }



  }

  onCancel(ev){
    console.log({ev},this.myInput);
  }

}
