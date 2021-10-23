import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { HgnotePage } from '../hgnote/hgnote';
import { ModelconnectmemberPage } from './modelconnectmember/modelconnectmember';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'page-gnote',
  templateUrl: 'gnote.html',
})

export class GnotePage {



  public baseURI = "https://admin.jcombiz.com/jcom/";
  public memberslist: any = [];
  public member: any;
  public amount: any;
  public btype: any;
  public ctype: any;
  public buisness: any;
  public comment: any;
  public buisnessdata: any = [];
  connectmember: any;
  connect_id: any;
  b_category: any;
  business_category: any;
  connect_type: any;
  tables: any;
  table: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public http: Http,
    public storage: Storage,
    public navParams: NavParams) {

    this.connectmember = this.navParams.get("data");
    console.log("Connect Member ID :", this.connectmember);


    this.connectmember = "Click To Choose The Connect";

  }



  ionViewDidLoad() {
    console.log('GnotePage');
    this.load();
    this.getTables();
  }



  getTables() {
    let
      url: any = this.baseURI + "get_jcom_table.php";
    this.http.get(url).map(res => res.json()).subscribe(data => {
      console.log("Business data :", data);
      this.tables = data;
      for(let i of this.tables){
        this.storage.get('jib_table').then((tableId) =>{
          if(tableId == i.table){
            this.table = i
          }
        })
      }
    });
  }


  load() {

    this.storage.get('jib_table').then((tableId) => {

      var table_id = tableId;

      this.storage.get('jibmid').then((val) => {

        var m_id = val;

        let body: string = "?m_id=" + m_id + "&table_id=" + table_id,
          type: string = "application/x-www-form-urlencoded; charset=UTF-8",
          // headers: any = new Headers({ 'Content-Type': type }),
          url: any = this.baseURI + "get_member_list.php" + body;
        this.http.get(url).map(res => res.json()).subscribe(data => {
          this.memberslist = data;
          console.log("Members data :", this.memberslist);

        });
      });
    });


    let
      url: any = this.baseURI + "get_business_category.php";
    this.http.get(url).map(res => res.json()).subscribe(data => {
      console.log("Business data :", data);
      this.buisnessdata = data;
    });


  }

  loadTable(ev:any) {

    console.log({ev},this.table);



      this.storage.get('jibmid').then((val) => {

        var m_id = val;

        let body: string = "?m_id=" + m_id + "&table_id=" + this.table.table,
          type: string = "application/x-www-form-urlencoded; charset=UTF-8",
          // headers: any = new Headers({ 'Content-Type': type }),
          url: any = this.baseURI + "get_member_list.php" + body;
        this.http.get(url).map(res => res.json()).subscribe(data => {
          this.memberslist = data;
          console.log("Members data :", this.memberslist);
          this.member = null;
          this.connectmember = "Click To Choose The Connect";
          this.buisness = null;
        });
      });


  }

  connect_member_page() {
    if (this.member == null || this.member == undefined) {
      const toast = this.toastController.create({
        message: 'Please Select the member',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
      console.log("Please select the member");

    } else {
      console.log("Member Id 1:", this.member.id);

      let chooseModal = this.modalCtrl.create(ModelconnectmemberPage, { data: this.member.id }, { cssClass: 'inset-modal' });
      chooseModal.onDidDismiss(data => {
        if (data != null) {
          console.log("From Model Connet id", data);
          this.connectmember = data['connect_name'];
          this.connect_id = data['connect_id'];
          this.b_category = data['b_category'];
          this.business_category = data['business_category'];
          this.buisness = { category: this.business_category, id: this.b_category };
          this.connect_type = data['connect_type'];
          // this.connect_id = data[0];
          // this.connect_id = data[0];
          console.log("From Model to page Connet Member", this.connectmember);
          console.log("From Model to page Connet id", this.buisness);
        } else {
          console.log("Connect Member is not Selected")
        }
      });
      chooseModal.present();
    }
  }

  business_change(ev: any) {
    console.log({ ev }, this.buisness);
  }
  confirm() {

    if (this.member == null) {
      const toast = this.toastController.create({
        message: 'Choose the Member',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.connect_id == null || this.connect_id == undefined) {
      const toast = this.toastController.create({
        message: 'Choose the Connect Member',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.member == undefined) {
      const toast = this.toastController.create({
        message: 'Choose the Member',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.amount == null) {
      const toast = this.toastController.create({
        message: 'Fill the amount',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.amount < 1) {
      const toast = this.toastController.create({
        message: 'Fill the Minmum amount',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.btype == null) {
      const toast = this.toastController.create({
        message: 'Choose the Business Type',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.ctype == null) {
      const toast = this.toastController.create({
        message: 'Choose the Connect Type',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.buisness == null) {
      const toast = this.toastController.create({
        message: 'Choose the Buisness Category',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.buisness == undefined) {
      const toast = this.toastController.create({
        message: 'Choose the Buisness Category',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.comment == null) {
      const toast = this.toastController.create({
        message: 'Fill the Comments',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else {

      this.storage.get('jibmid').then((val) => {

        var m_id = val;

        const loading = this.loadingController.create({
          // message: "Hellooo",
        });
        loading.present();

        console.log("Member :", this.member.id);
        console.log("amount :", this.amount);
        console.log("Business Type :", this.btype);
        console.log("Connect Type :", this.ctype);
        console.log("business :", this.buisness.id);
        console.log("comment :", this.comment);

        let body: string = "?m_id=" + m_id + "&to_member_id=" + this.member.id + "&business_type=" + this.btype + "&connect_type="
          + this.ctype + "&amount=" + this.amount + "&business_category=" + this.buisness.id + "&comments=" + this.comment + "&connect_id=" + this.connect_id,
          type: string = "application/x-www-form-urlencoded; charset=UTF-8",
          // headers: any = new Headers({ 'Content-Type': type }),
          url: any = this.baseURI + "send_gnote.php";

          let data = {
            m_id : m_id,
            to_member_id : this.member.id,
            business_type: this.btype,
            connect_type: this.ctype,
            amount: this.amount,
            business_category: this.business_category.id,
            comments: this.comment,
            connect_id: this.connect_id
          }

        this.http.post(url,data).map(res => res.json()).subscribe(data => {
          console.log("Result :", data)
          if (data[0].status == "success") {
            this.toast();
            loading.dismiss();
          }
        });
      });


    }

  }

  toast() {
    this.member = null;
    this.amount = null;
    this.btype = null;
    this.ctype = null;
    this.buisness = null;
    this.comment = null;
    const alert = this.alertCtrl.create({
      title: 'Success',
      buttons: ['OK']
    });
    alert.present();
  }

  clear() {
    this.member = null;
    this.amount = null;
    this.btype = null;
    this.ctype = null;
    this.buisness = null;
    this.comment = null;
  }

  hconnect() {
    this.navCtrl.push(HgnotePage);
  }

}
