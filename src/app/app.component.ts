import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { GnotePage } from '../pages/gnote/gnote';
import { ConnectPage } from '../pages/connect/connect';
import { YouPage } from '../pages/you/you';
import { GuestPage } from '../pages/guest/guest';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MemberPage } from '../pages/member/member';
import { SearchPage } from '../pages/search/search';
import { ShowcasePage } from '../pages/showcase/showcase';
import { AboutJcomPage } from '../pages/about-jcom/about-jcom';
import { SocialSharing } from '@ionic-native/social-sharing';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { HattendancePage } from '../pages/hattendance/hattendance';
import { Crop } from '@ionic-native/crop';
import { ObjectsProvider } from '../providers/objects/objects';

import { Market } from '@ionic-native/market';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  public member_name: any;

  pages: Array<{ title: string, component: any }>;

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public counter = 0;
  lat: any;
  lng: any;


  constructor(
    public platform: Platform,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public http: Http,
    public statusBar: StatusBar,
    // public qrScanner: QRScanner,
    public barcodeScanner: BarcodeScanner,
    public storage: Storage,
    public socialSharing: SocialSharing,
    public alertCtrl: AlertController,
    private geolocation: Geolocation,
    public splashScreen: SplashScreen,
    private crop: Crop,
    public obj: ObjectsProvider,
    private appVersion: AppVersion,
    private market: Market
    ) {

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Dashboard', component: HomePage },
    //   { title: 'Profile', component: ProfilePage },
    //   { title: 'GNote Entry ', component: GnotePage },
    //   { title: 'Connect Entry', component: ConnectPage },
    //   { title: 'You and Me entry', component: YouPage },
    //   { title: 'Guest Registration', component: GuestPage },
    //   { title: 'Exit', component: HomePage }
    // ];

    platform.registerBackButtonAction(() => {

      console.log("Active Page Name:",this.obj.pageName);
      // alert("back");
      this.counter++;

      var pag = this.nav.getActive().name;
      console.log("active page Component : ", pag);

      if(this.obj.pageName == "Home"){
          let alert = this.alertCtrl.create({
          message: 'Do you want to Exit ?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
                this.counter = 0;
              }
            },
            {
              text: 'OK',
              handler: () => {
                console.log('Ok clicked');
                platform.exitApp();

              }
            }
          ]
        });
        alert.present();
      } else {
        this.nav.setRoot(HomePage); 
      }

      // if (this.nav.getActive().name != "HomePage") {
      //   if (this.counter == 1) {
      //     console.log("counter 1");
      //     this.nav.setRoot(HomePage);
      //     this.counter = 0;
      //   }
      // }

      // if (this.counter == 2) {
      //   // this.presentToast();
      //   // setTimeout(() => { this.counter = 0 }, 3000)
      //   let alert = this.alertCtrl.create({
      //     message: 'Do you want to Exit ?',
      //     buttons: [
      //       {
      //         text: 'Cancel',
      //         role: 'cancel',
      //         handler: () => {
      //           console.log('Cancel clicked');
      //           this.counter = 0;
      //         }
      //       },
      //       {
      //         text: 'OK',
      //         handler: () => {
      //           console.log('Ok clicked');
      //           platform.exitApp();

      //         }
      //       }
      //     ]
      //   });
      //   alert.present();
      // }

    }, 0);

    this.checkVersion();
    this.initializeApp();

  }


  ///////////Under Gva Control
  dashpage() {
    this.nav.setRoot(HomePage);
  }
  profilepage() {
    this.nav.setRoot(ProfilePage);
  }
  gnotepage() {
    this.nav.setRoot(GnotePage);
  }
  connectpage() {
    this.nav.setRoot(ConnectPage);
  }
  youpage() {
    this.nav.setRoot(YouPage);
  }
  guestpage() {
    this.nav.setRoot(GuestPage);
  }
  logout() {
    this.storage.clear();
    this.nav.setRoot(LoginPage);
  }
  memberpage() {
    this.nav.setRoot(MemberPage);
  }
  abour_jcom() {
    this.nav.setRoot(AboutJcomPage);
  }

  app_share() {
    var msg = "https://play.google.com/store/apps/details?id=com.jcom";
    this.socialSharing.share(msg, 'JCOM', null, null);
  }

  async attendance() {

    this.storage.get('jibmid').then(async (val) => {

      var m_id = val;


      const loading = await this.loadingController.create({
      });
      await loading.present();

      this.geolocation.getCurrentPosition().then((resp) => {
        console.log({resp});
       this.lat =  resp.coords.latitude;
       this.lng = resp.coords.longitude;

       loading.dismiss();

       if(this.lat){

        this.barcodeScanner.scan().then((barcodeData) => {
          console.log("barcode scaned :",barcodeData);
  
          const loading = this.loadingController.create({
          });
          loading.present();
  
          if(barcodeData.cancelled == true){
            console.log("barcodeData:",barcodeData);
            loading.dismiss();

          } else {
            let body: string = "?m_id=" + m_id + "&qr_code=" + barcodeData.text+ "&lat=" + this.lat + "&lng=" + this.lng,
            url: any = this.baseURI + "send_attendance.php" + body;
            this.http.get(url).map(res => res.json()).subscribe(data => {
   
             loading.dismiss();
   
              console.log("send_attendance data : ",data);
   
              alert(data[0].status);
   
                const toast = this.toastController.create({
                  message: data[0].status,
                  position: 'bottom',
                  duration: 2000,
                  closeButtonText: 'OK'
                });
                toast.present();
                // loading.dismiss();
   
   
            });
          }
  
  
        
  
        
        },err=>{
          console.log("Error:",err);
          alert('Error:'+err);
        });
       } else {
        alert("GeoLocation Data Missing!");
       }



    }).catch((error) => {
      loading.dismiss();
      console.log('Error getting location', error);
    });


    });



  }

  attendanceHistory(){
    this.nav.setRoot(HattendancePage);
  }



  searchpage() {
    this.nav.setRoot(SearchPage);
  }

  Showcase() {
    // const toast = this.toastController.create({
    //   message: 'Coming Soon',
    //   position: 'bottom',
    //   duration: 2000,
    //   closeButtonText: 'OK'
    // });
    // toast.present();
    this.nav.setRoot(ShowcasePage);

  }

  changepsw() {

    this.storage.get('jibmid').then((val) => {

      var m_id = val;

      const alert = this.alertController.create({
        title: 'Change Password',
        enableBackdropDismiss: false,
        inputs: [
          {
            name: 'newpsw',
            type: 'password',
            placeholder: 'Enter New Password'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (data) => {
              if (data.newpsw == "") {
                console.log('Confirm Ok', data.newpsw);
                const toast = this.toastController.create({
                  message: 'Enter the Password',
                  position: 'bottom',
                  duration: 2000
                });
                toast.present();
                alert.present();
              }
              else {

                const loading = this.loadingController.create({
                });
                loading.present();

                let body: string = "?m_id=" + m_id + "&password=" + data.newpsw,
                  type: string = "application/x-www-form-urlencoded; charset=UTF-8",
                  // headers: any = new Headers({ 'Content-Type': type }),
                  url: any = this.baseURI + "change_password.php" + body;
                this.http.get(url).map(res => res.json()).subscribe(data => {
                  if (data[0].status == "success") {
                    const toast = this.toastController.create({
                      message: 'Password Changed',
                      position: 'bottom',
                      duration: 2000,
                      closeButtonText: 'OK'
                    });
                    toast.present();
                    loading.dismiss();
                    this.storage.clear();
                    this.nav.setRoot(LoginPage);
                  }
                  if (data[0].status != "success") {
                    const toast = this.toastController.create({
                      message: 'Error On changing password',
                      position: 'bottom',
                      duration: 2000
                    });
                    toast.present();
                    loading.dismiss();
                  }
                });
              }
            }
          }
        ]
      });

      alert.present();
    });

  }

  checkVersion(){

    // const loading = this.loadingController.create({
    // });
    // loading.present();

    let body: string = "?type=" + 2,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      // headers: any = new Headers({ 'Content-Type': type }),
      url: any = this.baseURI + "get_version.php" + body;
    this.http.get(url).map(res => res.json()).subscribe(data => {
      console.log({data});
      // alert("Before Enter in App:"+data[0]["registration"]);
      localStorage.setItem('registration',data[0]["registration"]);
      // alert(data);
      if(data[0].maintenance_mode == true){
        alert("Application is Under Maintenance!");
        this.platform.exitApp();
      } else if(data[0].maintenance_mode == false) {
        console.log("Not in Maintenance");
        this.appVersion.getVersionNumber().then((version)=>{
          console.log("Version:",version,version['version']);
          var appVersion = version;
          console.log(data[0].version,appVersion,data[0].version == appVersion)
          if(data[0].version > appVersion){
            alert("Your Application Update is Available!");
            this.market.open('com.jcom');
          } else {
            const toast = this.toastController.create({
                  message: 'Mobile Version UptoDate',
                  position: 'bottom',
                  duration: 2000,
                  closeButtonText: 'OK'
                });
                toast.present();
           this.initializeApp();
          }
        })
        
      }

      this.appVersion.getVersionNumber()

      // if (data[0].status == "success") {
      //   const toast = this.toastController.create({
      //     message: 'Version',
      //     position: 'bottom',
      //     duration: 2000,
      //     closeButtonText: 'OK'
      //   });
      //   toast.present();
      // }
    });

  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.splashScreen.hide();

      this.storage.get('jibmid').then((val) => {

        if (val > 0) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = LoginPage;
        }
      });

      this.storage.get('jibname').then((name) => {
        this.member_name = name;
      });

    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

