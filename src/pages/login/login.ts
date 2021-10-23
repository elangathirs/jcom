import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, MenuController, AlertController, Platform, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../register/register';
import { ForgetmodelPage } from './forgetmodel/forgetmodel';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public baseURI = "https://admin.jcombiz.com/jcom/";

  public number: any;
  public password: any;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  meeting_type: any = [];
  meetingType : any;
  registration: string;
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public navParams: NavParams,
    public storage: Storage,
    public http: Http,
    public modalCtrl: ModalController
    ) {
      
    this.menuCtrl.enable(false);

    platform.registerBackButtonAction(() => {
      this.platform.exitApp();
    }, 0)

    this.load();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  load(){
    const loading = this.loadingController.create({
    });
    loading.present();

    let
    type1: string = "application/x-www-form-urlencoded; charset=UTF-8",
    url1: any = this.baseURI + "get_meeting_type.php";
    this.http.get(url1).map(res => res.json()).subscribe(data1 => {
      console.log("get_zone data :", data1);
      this.meeting_type = data1;
      this.registration = localStorage.getItem("registration");
      // alert("Login Reg:"+this.registration);
      loading.dismiss();
    });
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  login() {

    if (this.number == null) {
      const toast = this.toastController.create({
        message: 'Enter the User Name',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    } else if (this.password == null) {
      const toast = this.toastController.create({
        message: 'Enter the Password',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    }
    else if (this.meetingType == null) {
      const toast = this.toastController.create({
        message: 'Choose The Meeting Type',
        position: 'bottom',
        duration: 2000
      });
      toast.present();
    }
    else {

      console.log("Number : ", this.number);
      console.log("Password : ", this.password);

      const loading = this.loadingController.create({
      });
      loading.present();

      let body: string = "?username=" + this.number + "&password=" + this.password + "&meeting_type=" + this.meetingType,
        type: string = "application/x-www-form-urlencoded; charset=UTF-8",
        // headers: any = new Headers({ 'Content-Type': type }),
        url: any = this.baseURI + "login.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
        if (data[0].m_id > 0) {
          console.log("Result :", data);
          console.log("M_ID :", data[0].m_id);
          console.log("Name :", data[0].m_name);
          console.log("Message :", data[0].message);
          console.log("email :", data[0].m_email_id);
          console.log("tableId :", data[0].jib_table);


          this.storage.set('jibmid', data[0].m_id);
          this.storage.set('jibname', data[0].m_name);
          this.storage.set('jibnum', data[0].m_mobile);
          this.storage.set('jibmail', data[0].m_email_id);
          this.storage.set('jib_table', data[0].jib_table);


          console.log("OK");
          this.navCtrl.setRoot(HomePage);
          loading.dismiss();
        }
        if (data[0].m_id == 0) {
          const toast = this.toastController.create({
            message: 'Invalid Username Or Password',
            position: 'bottom',
            duration: 2000
          });
          toast.present();
          loading.dismiss();

        }
      });

    }


  }

  forget() {

    let myModal = this.modalCtrl.create(ForgetmodelPage);
    myModal.onDidDismiss(data => {
      this.load();
    });
    myModal.present();

    // console.log("Forget");
    // let alert = this.alertCtrl.create({
    //   title: 'Forget Password',
    //   inputs: [
    //     {
    //       name: 'mobilenumber',
    //       placeholder: 'Enter Registed Mobile Number',
    //       type: 'number'
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: data => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'Ok',
    //       handler: data => {
    //         if (data.mobilenumber === "") {
    //           const toast = this.toastController.create({
    //             message: 'Enter the Registred Mobile Number',
    //             position: 'bottom',
    //             duration: 2000
    //           });
    //           toast.present();
    //         } else {
    //           console.log("Num", data.mobilenumber);
    //           this.forgetsend(data.mobilenumber);
    //         }

    //       }
    //     }
    //   ]
    // });
    // alert.present();

  }

  forgetsend(num) {

    console.log("Num1 : ", num);

    const loading = this.loadingController.create({
    });
    loading.present();

    let body: string = "?mobile_no=" + num,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      url: any = this.baseURI + "forget_password.php" + body;
    this.http.get(url).map(res => res.json()).subscribe(data => {

      const toast = this.toastController.create({
        message: data[0].message,
        position: 'bottom',
        duration: 6000
      });
      toast.present();

      loading.dismiss();
    });

  }

  reg() {
    this.navCtrl.setRoot(RegisterPage);
  }

}
