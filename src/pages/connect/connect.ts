import { Component } from '@angular/core';
import { NavController,Platform, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { HconnectPage } from '../hconnect/hconnect';

import { SelectSearchableComponent } from 'ionic-select-searchable';
import { Geolocation } from '@ionic-native/geolocation';
import { PconnectPage } from '../pconnect/pconnect';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
})
export class ConnectPage {

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public memberslist : any = [];
  public member : any;
  public ctype : any;
  public cstatus : any;
  public buisness : any;
  public name : any;
  public number : any;
  public email : any;
  public emailerr : any;
  public address : any;
  public comments : any;
  public range : any;
  public hideMe : boolean;
  public buisnessdata : any =[];
  signupform: FormGroup;
  table: any;
  tables: any;



  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private geolocation: Geolocation,
    public http: Http,
    public contact: Contacts) {

  }

  ionViewDidLoad() {
    console.log('ConnectPage');
    this.load();
    this.getTables();
    // this.getGeoLocation();
  }
  getGeoLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log({resp});
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

  ngOnInit() {
    // let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    // let EMAILPATTERN = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let EMAILPATTERN = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

    this.signupform = new FormGroup({
      email: new FormControl('', [ Validators.pattern(EMAILPATTERN)]),
    });
  }

  jib(){
    if(this.ctype == 1){
      this.hideMe = true;
    }
    if(this.ctype == 2){
    this.hideMe = false;
    this.cstatus = 0;
    this.name = null;
    this.number = null;
    }
    if(this.ctype == 3){
    this.hideMe = false;
    this.cstatus = 0;
    this.name = null;
    this.number = null;
    }
  }

  withjib(){
    this.storage.get('jibname').then((pname)=>{
    this.storage.get('jibnum').then((pnum)=>{
    this.storage.get('jibmail').then((pemail)=>{

      this.name = pname;
      this.number = pnum;
      this.email = pemail;
      console.log("email :",pemail);
      console.log("name :",pname);
      console.log("num :",pnum);
    });
    });
    });
  }

  withnojib(){
    this.name = null;
    this.number = null;
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
          this.buisness = null;
        });
      });


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

  async getContacts(){

    console.log("Contact Click")

    try{
      const SelectedContact = await this.contact.pickContact();
      console.log("All :",SelectedContact)
      console.log("Name :",SelectedContact.displayName);
      console.log("Number :",SelectedContact.phoneNumbers[0].value);
      if(SelectedContact.emails == null){
        this.name = SelectedContact.displayName;
        this.number = SelectedContact.phoneNumbers[0].value;
        this.email = null;
      }else{
        this.name = SelectedContact.displayName;
        this.number = SelectedContact.phoneNumbers[0].value;
        this.email = SelectedContact.emails[0].value;
      }

    }
    catch(e) {
      // alert(e);
      console.log("Error on Contact :",e);
    }

  }

  confirm(){


    if(this.member == null){
    console.log("hai");

      const toast = this.toastController.create({
        message: 'Choose the Member',
        position: 'bottom',
        duration:2000
      });
      toast.present();
    } else if(this.ctype == null){
      const toast = this.toastController.create({
        message: 'Choose the Connect Type',
        position: 'bottom',
        duration:2000
      });
      toast.present();
    } else if(this.cstatus == null){
      const toast = this.toastController.create({
        message: 'Choose the Connect Status',
        position: 'bottom',
        duration:2000
      });
      toast.present();
    } else if(this.buisness == null){
      const toast = this.toastController.create({
        message: 'Choose the Buisness Category',
        position: 'bottom',
        duration:2000
      });
      toast.present();
    } else if(this.name == null){
      const toast = this.toastController.create({
        message: 'Fill the Name',
        position: 'bottom',
        duration:2000
      });
      toast.present();
    } else if(this.number == null){
      const toast = this.toastController.create({
        message: 'Fill the Number',
        position: 'bottom',
        duration:2000
      });
      toast.present();
    } else if(this.email != null || this.range == null){

      if(this.signupform.invalid){
        const toast = this.toastController.create({
          message: 'Fill Valid Email',
          position: 'bottom',
          duration:2000
        });
        toast.present();
      }else if(this.range == null){
        const toast = this.toastController.create({
          message: 'Choose the range',
          position: 'bottom',
          duration:2000
        });
        toast.present();
      }else{
        this.post();
      }


    } else{

      console.log("post");


      this.storage.get('jibmid').then((val)=>{

        var m_id = val;

      console.log("Member :",this.member);
      console.log("ctype :",this.ctype);
      console.log("cstatus :",this.cstatus);
      console.log("business :",this.buisness);
      console.log("name :",this.name);
      console.log("number :",this.number);
      console.log("email :",this.email);
      console.log("address :",this.address);
      console.log("comments :",this.comments);
      console.log("range :",this.range);

      const loading =  this.loadingController.create({
        // message: "Hellooo",
      });
      loading.present();

      let body: string = "?m_id="+m_id+"&to_member_id="+this.member.id+"&connect_type="+ this.ctype +"&connect_status="
      + this.cstatus +"&business_category="+ this.buisness.id +"&connect_name="+ this.name
      + "&mobile_no=" + this.number + "&email_id=" + this.email + "&address=" + this.address
      + "&comments=" + this.comments + "&about_connect=" + this.range,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      // headers: any = new Headers({ 'Content-Type': type }),
      url: any = this.baseURI + "send_connect.php" + body;
      this.http.post(url,body).map(res => res.json()).subscribe(data => {
        console.log("Result :",data);
        if(data[0].status == "success"){
          this.toast();
          loading.dismiss();
        }
      });
      });

    }
  }


  post(){

    console.log("post");


    this.storage.get('jibmid').then((val)=>{

      var m_id = val;

    console.log("Member :",this.member);
    console.log("ctype :",this.ctype);
    console.log("cstatus :",this.cstatus);
    console.log("business :",this.buisness);
    console.log("name :",this.name);
    console.log("number :",this.number);
    console.log("email :",this.email);
    console.log("address :",this.address);
    console.log("comments :",this.comments);
    console.log("range :",this.range);

    const loading =  this.loadingController.create({
      // message: "Hellooo",
    });
    loading.present();

    let body: string = "?m_id="+m_id+"&to_member_id="+this.member.id+"&connect_type="+ this.ctype +"&connect_status="
    + this.cstatus +"&business_category="+ this.buisness.id +"&connect_name="+ this.name
    + "&mobile_no=" + this.number + "&email_id=" + this.email + "&address=" + this.address
    + "&comments=" + this.comments + "&about_connect=" + this.range,
    type: string = "application/x-www-form-urlencoded; charset=UTF-8",
    // headers: any = new Headers({ 'Content-Type': type }),
    url: any = this.baseURI + "send_connect.php" ;

    let data = {
      m_id : m_id,
      to_member_id: this.member.id,
      connect_type: this.ctype,
      connect_status: this.cstatus,
      business_category: this.buisness.id,
      connect_name: this.name,
      mobile_no: this.number,
      email_id: this.email,
      address: this.address,
      comments: this.comments,
      about_connect : this.range
    }

    this.http.post(url,data).map(res => res.json()).subscribe(data => {
      console.log("Result :",data);
      if(data[0].status == "success"){
        this.toast();
        loading.dismiss();
      }
    });
    });

  }

  toast(){
    this.member = null;
    this.ctype = null;
    this.cstatus = null;
    this.buisness = null;
    this.name = null;
    this.number = null;
    this.email = null;
    this.address = null;
    this.comments = null;
    this.range = null;
    this.hideMe = true;


    const alert = this.alertCtrl.create({
      title: 'Success',
      buttons: ['OK']
    });
    alert.present();
  }

  signup(){
    console.log("SignUp!");
  }

  hconnect(){
    this.navCtrl.push(HconnectPage);
  }

  pending_connect(){
    this.navCtrl.push(PconnectPage);
  }

}
