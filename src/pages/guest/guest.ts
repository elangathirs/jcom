import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';

import { Http } from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Contacts } from '@ionic-native/contacts';


import { SelectSearchableComponent } from 'ionic-select-searchable';
import { HguestPage } from '../hguest/hguest';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public name: any;
  public mobilenumber: any;
  public mail: any;
  public city: any;
  public buisness: any;
  public ctype: any;
  public comment: any;
  public buisnessdata: any = [];
  signupform: FormGroup;


  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public http: Http,
    public alertCtrl: AlertController,
    public contact: Contacts,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('GuestPage');
    this.load();
  }

  ngOnInit() {
    // let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    // let EMAILPATTERN = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let EMAILPATTERN = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;


    this.signupform = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });
  }

  load() {

    let
      url: any = this.baseURI + "get_business_category.php";
    this.http.get(url).map(res => res.json()).subscribe(data => {
      console.log("Business data :", data);
      this.buisnessdata = data;
    });

  }

  confirm() {

    if (this.name == null) {
      const toast = this.toastController.create({
        message: 'Fill the Name',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.mobilenumber == null) {
      const toast = this.toastController.create({
        message: 'Fill the Mobile Number',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.city == null) {
      const toast = this.toastController.create({
        message: 'Fill the City',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.buisness == null) {
      const toast = this.toastController.create({
        message: 'Choose Business Category',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.ctype == null) {
      const toast = this.toastController.create({
        message: 'Choose Type',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else {

      this.storage.get('jibmid').then((val) => {

        var m_id = val;

        console.log("name :", this.name);
        console.log("mobilenumber :", this.mobilenumber);
        console.log("email :", this.mail);
        console.log("city :", this.city);
        console.log("business  :", this.buisness);
        console.log("type  :", this.ctype);
        console.log("comment  :", this.comment);

        const loading = this.loadingController.create({
        });
        loading.present();

        //     
        let postdata = {
          m_id : m_id,
          guest_name: this.name,
          mobile_no: this.mobilenumber,
          email_id: this.mail,
          guest_city: this.city,
          business_category: this.buisness.id,
          type: this.ctype,
          comments: this.comment
        },
          url: any = this.baseURI + "send_guest.php" ;


        this.http.post(url,postdata).map(res => res.json()).subscribe(data => {
          console.log("Result :", data);
          if (data[0].status == "success") {
            this.toast();
            loading.dismiss();
          }
        });


        // let body: string = "?m_id=" + m_id + "&guest_name=" + this.name + "&mobile_no=" + this.mobilenumber + "&email_id=" + this.mail +
        //   "&guest_city=" + this.city + "&business_category=" + this.buisness.id + "&type=" + this.ctype + "&comments=" + this.comment,
        //   url: any = this.baseURI + "send_guest.php" + body;
        // this.http.get(url).map(res => res.json()).subscribe(data => {
        //   console.log("Result :", data);
        //   if (data[0].status == "success") {
        //     this.toast();
        //     loading.dismiss();
        //   }
        // });

      });


    }

    // else if(this.mail == null){
    //   const toast = this.toastController.create({
    //     message: 'Fill the Email',
    //     position: 'bottom',
    //     duration:2000        
    //   });
    //   toast.present();
    // } else if(this.signupform.invalid){
    //   const toast = this.toastController.create({
    //     message: 'Fill Valid Email',
    //     position: 'bottom',
    //     duration:2000
    //   });
    //   toast.present();
    // } 

  }

  toast() {
    this.name = null;
    this.mobilenumber = null;
    this.mail = null;
    this.city = null;
    this.buisness = null;
    this.ctype = null;
    this.comment = null;

    const alert = this.alertCtrl.create({
      title: 'Success',
      buttons: ['OK']
    });
    alert.present();
  }

  async getContacts() {

    console.log("Contact Click")

    try {
      const SelectedContact = await this.contact.pickContact();
      console.log("All :", SelectedContact)
      console.log("Name :", SelectedContact.displayName);
      console.log("Number :", SelectedContact.phoneNumbers[0].value);
      if (SelectedContact.emails == null) {
        this.name = SelectedContact.displayName;
        this.mobilenumber = SelectedContact.phoneNumbers[0].value;
        this.mail = null;
      } else {
        this.name = SelectedContact.displayName;
        this.mobilenumber = SelectedContact.phoneNumbers[0].value;
        this.mail = SelectedContact.emails[0].value;
      }

    }
    catch (e) {
      // alert(e);
      console.log("Error on Contact :", e);
    }

  }

  hguest(){
    this.navCtrl.push(HguestPage);
  }
}
