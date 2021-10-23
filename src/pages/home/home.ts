import { Component, ViewChild } from '@angular/core';
import { IonicApp, Nav } from 'ionic-angular';
import { App, AlertController, PopoverController } from 'ionic-angular';
import { NavController, Slides, ModalController, MenuController, LoadingController, ToastController, Platform } from 'ionic-angular';
import { GnotePage } from '../gnote/gnote';
import { ConnectPage } from '../connect/connect';
import { YouPage } from '../you/you';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { GuestPage } from '../guest/guest';
import { StatsmodalPage } from './statsmodal/statsmodal';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { MemberscorePage } from '../memberscore/memberscore';
import { ShowcasePage } from '../showcase/showcase';
import { ObjectsProvider } from '../../providers/objects/objects';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild('mySlider') slider: Slides;
  @ViewChild(Nav) nav: Nav;
  selectedSegment: string;
  slides: any;
  currentSlide: any;

  @ViewChild('halfDoughnutCanvas') halfDoughnutCanvas;
  halfDoughnutChart: any;

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public profiledata: any = [];

  public cg1: any;
  public cr1: any;
  public gg1: any;
  public gr1: any;
  public ym1: any;
  public g1: any;

  public cg2: any;
  public cr2: any;
  public gg2: any;
  public gr2: any;
  public ym2: any;
  public g2: any;

  public cg3: any;
  public cr3: any;
  public gg3: any;
  public gr3: any;
  public ym3: any;
  public g3: any;




  public membername: any;
  scoredata: any;
  imgpath: any;
  show_batch_img: boolean = false;



  constructor(
    public platform: Platform,
    public storage: Storage,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,
    public http: Http,
    public modalCtrl: ModalController,
    public obj: ObjectsProvider) {

    // platform.registerBackButtonAction(() => {

      // platform.registerBackButtonAction(async () => {
      //   let view = this.nav;
      //   console.log({view});
      // });

      
      

    this.selectedSegment = 'first';
    this.slides = [
      {
        id: "first"
      },
      {
        id: "second"
      },
      {
        id: "third"
      }
    ];
    this.menuCtrl.enable(true);

  }

  // ioniViewWillEnter(){
  //   this.obj.pageName = 'Home';
  //   console.log("Obj Name:",this.obj.pageName);
  // }

  ionViewWillEnter() {
    console.log("Pre Obj Name:",this.obj.pageName);
    this.obj.pageName = 'Home';
    console.log("hai:",this.obj.pageName);
    this.load();
    this.load1();
  }

  ionViewWillLeave(){
    this.obj.pageName = undefined;
    console.log("Post Obj Name:",this.obj.pageName);
  }

  ionViewDidLoad() {
    console.log('HomePage');
    this.load();
    this.load1();

  }



  Showcase(){
    // const toast = this.toastController.create({
    //   message: 'Coming Soon',
    //   position: 'bottom',
    //   duration: 2000,
    //   closeButtonText: 'OK'
    // });
    // toast.present();
    this.navCtrl.setRoot(ShowcasePage)
  }

  load() {

    this.storage.get('jibmid').then((val) => {
      this.storage.get('jibname').then((name) => {
        var m_id = val;
        this.membername = name;
        const loader = this.loadingCtrl.create({
          // duration: 3000,
          spinner:'dots'
        });
        loader.present();

        let body: string = "?m_id=" + m_id,
          url: any = this.baseURI + "get_member_details.php" + body;
        this.http.get(url).map(res => res.json()).subscribe(data => {
          this.profiledata = data;
          console.log("Let Him in:",this.profiledata);
          if(this.profiledata[0].membership_status == 2){
            console.log("Need to LogOut");
            this.storage.clear();
            this.navCtrl.setRoot(LoginPage);
          } else {
            console.log("Let Him in:",this.profiledata[0].membership_status);
          }
          if(this.profiledata != null){
            loader.dismiss();
            console.log("full");
          }
          console.log("Profile data :", this.profiledata);
        });

        let
          body1: string = "?m_id=" + m_id + "&type=1",
          url1: any = this.baseURI + "get_meeting_data.php" + body1;
        this.http.get(url1).map(res => res.json()).subscribe(data1 => {
          console.log("1 data :", data1);
          this.cg1 = data1[0].connect_given;
          this.cr1 = data1[0].connect_received;
          this.gg1 = data1[0].gnote_given;
          this.gr1 = data1[0].gnote_received;
          this.ym1 = data1[0].youandme;
          this.g1 = data1[0].guest;

        });

        let
          body2: string = "?m_id=" + m_id + "&type=2",
          url2: any = this.baseURI + "get_meeting_data.php" + body2;
        this.http.get(url2).map(res => res.json()).subscribe(data2 => {
          console.log("2 data :", data2);
          this.cg2 = data2[0].connect_given;
          this.cr2 = data2[0].connect_received;
          this.gg2 = data2[0].gnote_given;
          this.gr2 = data2[0].gnote_received;
          this.ym2 = data2[0].youandme;
          this.g2 = data2[0].guest;

        });

        let
          body3: string = "?m_id=" + m_id + "&type=3",
          url3: any = this.baseURI + "get_meeting_data.php" + body3;
        this.http.get(url3).map(res => res.json()).subscribe(data3 => {
          console.log("3 data :", data3);
          this.cg3 = data3[0].connect_given;
          this.cr3 = data3[0].connect_received;
          this.gg3 = data3[0].gnote_given;
          this.gr3 = data3[0].gnote_received;
          this.ym3 = data3[0].youandme;
          this.g3 = data3[0].guest;

        });

      });
    });


  }

  load1(){

    this.storage.get('jibmid').then((val) => {

        var m_id = val;
        
        const loader = this.loadingCtrl.create({
          spinner:'dots'
        });
        loader.present();

        let body: string = "?m_id=" + m_id,
          url: any = this.baseURI + "get_member_score.php" + body;
        this.http.get(url).map(res => res.json()).subscribe(data => {
          this.scoredata = data;
          console.log("Score data :", this.scoredata);


          if(this.scoredata == null){
          loader.dismiss();
          this.show_batch_img = false;
          }else{
            console.log("Score data length:", this.scoredata.length);
            var i = this.scoredata.length-1;

            this.imgpath = this.scoredata[i].batch_pic;
            console.log("batch_pic :" ,this.imgpath);
  
          this.show_batch_img = true;


            loader.dismiss();
          }

        });



    });

  }

  memberscorePage(){
    this.navCtrl.push(MemberscorePage,{data:this.scoredata})
  }

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);

  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    this.currentSlide = this.slides[slider.getActiveIndex()];
    this.selectedSegment = this.currentSlide.id;
  }

  ////////////////////////Navigation

  gnote() {
    this.navCtrl.setRoot(GnotePage);
  }

  connect() {
    this.navCtrl.setRoot(ConnectPage);
  }

  you() {
    this.navCtrl.setRoot(YouPage);
  }

  profile() {
    this.navCtrl.push(ProfilePage);
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
  }

  guest() {
    this.navCtrl.setRoot(GuestPage);
  }

  stats() {
    let myModal = this.modalCtrl.create(StatsmodalPage);
    myModal.present();
  }

}
