import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, AlertController, ToastController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ProfilemodalPage } from './profilemodal/profilemodal';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Crop , CropOptions } from '@ionic-native/crop';
import { Base64 } from '@ionic-native/base64/ngx';
import { FilePath } from '@ionic-native/file-path';

// const imageToBase64 = require('image-to-base64');
import imageToBase64 from 'image-to-base64/browser';
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public baseURI = "https://admin.jcombiz.com/jcom/";
  public profiledata: any = [];
  public base64Image: any;

  public business_name: any;
  public address: any;
  public city: any;
  public district: any;
  public state: any;
  public pincode: any;
  public b_mobile_no: any;
  public b_email_id: any;
  public website: any;
  public business_info: any;
  public business_keywords: any;
  public products: any;
  public needed_contacts: any;
  base64ImageNew: any;
  amount: any;
  resolvePath: string | Blob;

  constructor(
    public navCtrl: NavController,
    private crop: Crop,
    private base64: Base64,
    private alertCtrl: AlertController,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public camera: Camera,
    public modalCtrl: ModalController,
    public http: Http,
    private file: File,
    private filePath: FilePath,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ProfilePage');
    this.load();
  }

  ionViewWillEnter() {
    console.log("hai");
    this.load();
  }


  load() {

    this.storage.get('jibmid').then((val) => {

      var m_id = val;

      let body: string = "?m_id=" + m_id,
        type: string = "application/x-www-form-urlencoded; charset=UTF-8",
        // headers: any = new Headers({ 'Content-Type': type }),
        url: any = this.baseURI + "get_member_details.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
        this.profiledata = data;
        this.business_name = data[0].business_name;
        console.log("Profile data :", this.profiledata);
      });
    });

  }

  image() {

    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 360,
      // allowEdit: true,
      targetHeight: 360
    }

    this.camera.getPicture(options).then((imageData) => {

      this.base64Image = imageData;
      // this.base64Image = 'data:image/jpeg;base64,' + imageData;
      if (this.base64Image !== null) {
        console.log("Base64:", this.base64Image);
        // this.upload();
        const crops : CropOptions = {
          quality: 80,
          targetWidth: 360,
          // allowEdit: true,
          targetHeight: 360
        }
        this.crop.crop(this.base64Image, crops)
        .then(
          (newImage) => {
           this.base64Image=newImage;
           // this.croppedImagepath = this.base64Image;
            console.log('new image path is: ' + newImage);
   
            this.filePath.resolveNativePath(newImage)
           .then((resolvePath) => {
             console.log(resolvePath);
             var copyPath = resolvePath;
            var splitPath = copyPath.split('/');
            var imageName = splitPath[splitPath.length - 1];
            var filePath = resolvePath.split(imageName)[0];
             this.file.readAsDataURL(filePath,imageName).then((base64) => {
              //  this.croppedImagepath = base64;
              //  this.isLoading = false;
               console.log({base64});
               this.resolvePath = base64;
              this.upload();
               
              //  alert("Image Cropped Successfully!");
             }, (error) => {
               alert('Error in showing image' + error);
               console.log({error});
              //  this.isLoading = false;
             });
           },
           (err) => 
           {
             console.log(err)
           });
   
           //  this.file.removeRecursively(filePath,"").then(
           //   (copyData)=>{
           //     console.log({copyData});
           //     this.file.moveFile(filePath,imageName,this.file.externalRootDirectory,imageName).then(
           //       (moveData)=>{
           //         console.log({moveData});
           //       },
           //       (moveError)=>{
           //         console.log({moveError});
           //       }
           //     )
           //   },
           //   (copyError)=>{
           //     console.log({copyError});
           //   }
           // )
   
           //  this.showCroppedImage(newImage);
           },
          error => {
            console.error('Error cropping image', error);
            alert("error in Crop!");
            
          }
        );

      }
    }, (err) => {
      alert("Code101:" + "Error In Image Edit!");
      console.log({ err });
    });
  }

  // image() {

  //   const options: CameraOptions = {
  //     quality: 80,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //     // allowEdit: true,
  //     targetWidth: 360,
  //     targetHeight: 360
  //   }

  //   this.camera.getPicture(options).then((imageData) => {

  //     this.base64Image = 'data:image/jpeg;base64,' + imageData;
  //     if(this.base64Image !== null){
  //       this.upload();
  //     }
  //   }, (err) => {
  //     console.log({err});
  //   });
  // }

  editprofile() {
    let myModal = this.modalCtrl.create(ProfilemodalPage);
    myModal.onDidDismiss(data => {
      this.load();
    });
    myModal.present();

  }

  upload() {

    this.storage.get('jibmid').then((val) => {

      var m_id = val;

      let loading = this.loadingCtrl.create({
        duration: 2000
      });

      loading.present();

      let url = 'https://admin.jcombiz.com/jcom/upload_photo.php';
      let postData = new FormData();
      postData.append('file', this.resolvePath);
      postData.append('m_id', m_id);

      this.http.post(url, postData).subscribe((result) => {
        loading.dismiss();
        this.load();
      });
    });

  }

  pinChange() {
    console.log("PinNumber:", this.pincode);
    if (this.pincode.length == 6) {
      console.log("PinNumber is Valid");

      let body: string = "?pincode=" + this.pincode,
        type: string = "application/x-www-form-urlencoded; charset=UTF-8",
        // headers: any = new Headers({ 'Content-Type': type }),
        url: any = this.baseURI + "get_pincode.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
        this.city = data[0].city;
        this.state = data[0].state;
        this.district = data[0].city;
        console.log("Profile data :", data, this.city, this.state);

      });

    } else if (this.pincode.length > 6) {
      console.log("PinNumber is Exide");
    } else {
      console.log("PinNumber is Less");
    }
  }

  save() {

    this.storage.get('jibmid').then((val) => {

      var m_id_val = val;

      const loading = this.loadingCtrl.create({
      });
      loading.present();

      let postdata = {
        m_id: m_id_val,
        business_name: this.business_name,
        address: this.address,
        city: this.city,
        district: this.district,
        state: this.state,
        pincode: this.pincode,
        b_mobile_no: this.b_mobile_no,
        b_email_id: this.b_email_id,
        website: this.website,
        business_info: this.business_info,
        business_keywords: this.business_keywords,
        products: this.products,
        needed_contacts: this.needed_contacts,
      }

      let url: any = this.baseURI + "send_member_details.php";

      this.http.post(url, postdata).map(res => res.json()).subscribe(data => {
        console.log("Result :", data);
        if (data[0].status == "success") {
          loading.dismiss();

          let alert = this.alertCtrl.create({
            title: 'Profile Updated Successfully',
            buttons: ['Close']
          });
          alert.present();


        }
      });

    });

  }

  // renew(amount){
  //   console.log("Paymnet Option Will Add Soon!");
  // }

  renew(amount) {
    console.log("Amount", amount);
    this.amount = amount;
    var newAmount = amount + '00';
    console.log({ newAmount });

    var options = {
      description: '2000 + GST Tax & Convenience fee',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_live_rDoq8PlliCLlyy',
      // key: 'rzp_test_bhOlGtG2oW8nin',
      amount: newAmount,
      name: this.profiledata[0].name,
      prefill: {
        email: this.profiledata[0].p_email_id,
        contact: this.profiledata[0].p_mobile_no,
        name: this.profiledata[0].name
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('Closed')
        }
      }
    };

    console.log('payment',options)
    var successCallback = (payment_id) => {
  
      // alert('payment_id: ' + payment_id);
      const toast = this.toastController.create({
        message: "Paymet Success",
        position: 'bottom',
        duration: 2000
      });
      toast.present();
      // alert(payment_id);
      this.signup(payment_id);
      //Navigate to another page using the nav controller
      //this.navCtrl.setRoot(SuccessPage)
      //Inject the necessary controller to the constructor
    };

    var cancelCallback = (error) => {
      console.log({ error });

      var str = error.description;
      var str_array = str.split(',');

      for (var i = 0; i < str_array.length; i++) {
        // Trim the excess whitespace.
        str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
        // Add additional code here, such as:
        if(str_array[i].includes("description")){
          var str_array = str_array[i].split(':');
          var last_Message = str_array[1].replace(/['"]+/g, '');
          alert(last_Message);
        }
      }

      // alert(error.description.error);
      //Navigate to another page using the nav controller
      //this.navCtrl.setRoot(ErrorPage)
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

  signup(payment_id_val) {
    const loading = this.loadingController.create({
    });
    loading.present();

    let
      body: string = "?m_id=" + this.profiledata[0].m_id + "&payment_id=" + payment_id_val + "&amount=" + this.amount,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      url: any = this.baseURI + "send_renewal.php" + body;
    this.http.get(url).map(res => res.json()).subscribe(data => {
      console.log("get_signup data :", data);
      if (data) {
        const toast = this.toastController.create({
          message: data[0].message,
          position: 'bottom',
          duration: 2000
        });
        toast.present();
        this.load();
      } else {
        console.log("Signup status");
      }

      loading.dismiss();
    });
  }



}
