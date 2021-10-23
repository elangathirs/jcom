import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AlertController, LoadingController, ModalController, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TermsPage } from '../terms/terms';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  member: boolean = false;
  country: any[];
  zone: any[];
  lom: any[];
  table: any[];
  business: any[];

  userName : any;
  mobile : any;
  eMail : any;
  password : any;
  countryName : any;
  zoneName : any;
  lomName : any;
  memberId : any = "-";
  meetingType : any;
  tableName : any;
  businessName : any;

  public baseURI = "https://admin.jcombiz.com/jcom/";
  show_zone: boolean = false;
  show_LOM: boolean = false;
  meeting_type: any[];
  show_table: boolean = false;
  show_meeting_table: boolean = false;
  disable_register: boolean = true;

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  acceptTerms: boolean = false;
  tableLength: boolean = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public http: Http,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController
    ) {

    this.load();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FieldsPage');
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  load() {

    const loading = this.loadingController.create({
    });
    loading.present();

    let
    type: string = "application/x-www-form-urlencoded; charset=UTF-8",
    url: any = this.baseURI + "get_zone.php";
    this.http.get(url).map(res => res.json()).subscribe(data => {
      console.log("get_zone data :", data);
      this.country = data;
      // loading.dismiss();
    });

    let
    type1: string = "application/x-www-form-urlencoded; charset=UTF-8",
    url1: any = this.baseURI + "get_meeting_type.php";
    this.http.get(url1).map(res => res.json()).subscribe(data1 => {
      console.log("get_zone data :", data1);
      this.meeting_type = data1;
      loading.dismiss();
    });


  }

  getZone(val) {
    console.log("getZone val :", val);
    this.show_zone = true;
    for (var i = 0; i < this.country.length; i++) {
      if (this.country[i].country == val) {
        this.zone = this.country[i].zone_details
      }
    }
  }

  getLOM(val) {
    console.log("getLOM val :", val);
    this.show_LOM = true;
    this.show_meeting_table = true;

    const loading = this.loadingController.create({
    });
    loading.present();

    let
      body: string = "?zone="+val,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      url: any = this.baseURI + "get_lom.php" + body;
    this.http.get(url).map(res => res.json()).subscribe(data => {
      console.log("get_lom data :", data);
      this.lom = data;
      loading.dismiss();
    });

  }

  getTable(val){
    console.log("getTable val :", val);
    console.log("getTable zoneName :", this.zoneName);


    if(this.lom != null ){
      this.show_table = true;
      const loading = this.loadingController.create({
      });
      loading.present();
  
      let
        body: string = "?zone="+this.zoneName+"&meeting_type=" + val,
        type: string = "application/x-www-form-urlencoded; charset=UTF-8",
        url: any = this.baseURI + "get_table.php" + body;
      this.http.get(url).map(res => res.json()).subscribe(data => {
        console.log("get_table data :", data);
        this.table = data;
        console.log("length:",this.table);
        if(this.table == null){
          this.tableLength = false;
        } else {
          this.tableLength = true;
        }
        console.log(this.tableLength);
        loading.dismiss();
      });
    }
  }

  tableEmpty(){
      let alert = this.alertCtrl.create({
        title: 'No Table Found',
        message: 'Sorry,There is no table Found'
        // buttons: [
        //   // {
        //   //   text: 'Cancel',
        //   //   role: 'cancel',
        //   //   handler: () => {
        //   //     console.log('Cancel clicked');
        //   //   }
        //   // },
        //   {
        //     text: 'Click Here',
        //     handler: () => {
        //       console.log('Buy clicked');
        //       window.open("https://jcombiz.com/");
        //     }
        //   }
        // ]
      });
      alert.present();
  }

  getBusiness(val){
    const loading = this.loadingController.create({
    });
    loading.present();

    let
      body: string = "?table="+ val,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      url: any = this.baseURI + "get_bc.php" + body;
    this.http.get(url).map(res => res.json()).subscribe(data => {
      console.log("get_bc data :", data);
      this.business = data;
      loading.dismiss();
    });
  }

  businessCheck(val){
    console.log("businessCheck :",val);
    // for (var i = 0; i < this.business.length; i++) {
    //   if (this.business[i].id == val) {
    //       console.log("this.business[i].count :",this.business[i].count);

          if(val.count != "0"){
            console.log("Selected Business Category is Occupied by another Partner,Please Choose different Business Category / Table")
            
            const toast = this.toastController.create({
              message: 'Selected Business Category is Occupied by another Partner,Please Choose different Business Category / Table',
              position: 'bottom',
              duration:5000        
            });
            toast.present();

            this.disable_register = true;
          
          }else{
            console.log("Business ok");
            this.disable_register = false;
          }

    //   }
    // }
  }

  login() {
    this.navCtrl.setRoot(LoginPage);
  }

  show_member_id(val){
    if(val == "1"){
      this.member = true;
    }else{
      this.member = false;
    }
  }

  register() {

    if(this.userName == null){
      const toast = this.toastController.create({
        message: 'Fill the Name',
        position: 'bottom',
        duration:2000        
      });
      toast.present();
    }else if(this.mobile == null){
      const toast = this.toastController.create({
        message: 'Fill the Mobile Number',
        position: 'bottom',
        duration:2000        
      });
      toast.present();
    }else if(this.eMail == null){
      const toast = this.toastController.create({
        message: 'Fill the Email',
        position: 'bottom',
        duration:2000        
      });
      toast.present();
    }else if(this.password == null){
      const toast = this.toastController.create({
        message: 'Fill the Password',
        position: 'bottom',
        duration:2000        
      });
      toast.present();
    }else if(this.countryName == null){
      const toast = this.toastController.create({
        message: 'Choose Country',
        position: 'bottom',
        duration:2000        
      });
      toast.present();
    }else if(this.zoneName == null){
      const toast = this.toastController.create({
        message: 'Choose Zone',
        position: 'bottom',
        duration:2000        
      });
      toast.present();
    }else if(this.lomName == null){
      const toast = this.toastController.create({
        message: 'Choose LOM',
        position: 'bottom',
        duration:2000        
      });
      toast.present();
    }else if(this.meetingType == null){
      const toast = this.toastController.create({
        message: 'Choose Meeting Type',
        position: 'bottom',
        duration:2000        
      });
      toast.present();
    }else if(this.tableName == null){
      const toast = this.toastController.create({
        message: 'Choose Table',
        position: 'bottom',
        duration:2000        
      });
      toast.present();
    }else if(this.businessName == null){
      const toast = this.toastController.create({
        message: 'Choose Business Category',
        position: 'bottom',
        duration:2000        
      });
      toast.present();
    }else{
      // console.log("OK")
      if(this.member == true){
        if(this.memberId == null){
          const toast = this.toastController.create({
            message: 'Fill Member ID',
            position: 'bottom',
            duration:2000        
          });
          toast.present();
        }else{
          console.log("OK");
          // this.signup();
          this.pay();
        }
      }else{
        console.log("OK");
        // this.signup();
        this.pay();

      }
    }

  }

  signup(payment_id_val){
    const loading = this.loadingController.create({
    });
    loading.present();

    let
      body: string = "?name="+this.userName+"&mobile_no="+this.mobile+"&email_id="+this.eMail+"&password="+this.password+"&country="+this.countryName+"&zone="+this.zoneName+"&lom="+this.lomName.lom_name+"&membership_id="+this.memberId+"&table="+this.tableName+"&business_category="+this.businessName.id+"&payment_id="+payment_id_val+"&meeting_type="+this.meetingType,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      url: any = this.baseURI + "get_signup.php" + body;
    this.http.get(url).map(res => res.json()).subscribe(data => {
      console.log("get_signup data :", data);
      if(data[0].status == "1"){
        const toast = this.toastController.create({
          message: data[0].message,
          position: 'bottom',
          duration:2000        
        });
        toast.present();
        this.navCtrl.setRoot(LoginPage);
      }else{
        console.log("Signup status");
      }

      loading.dismiss();
    });
  }

  // pay(){
  //   console.log("Payment Method Will Be Added Soon!");
  // }

  pay() {
    
    var options = {
      description: '2000 + GST Tax & Convenience fee',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_live_rDoq8PlliCLlyy',
      // key: 'rzp_test_bhOlGtG2oW8nin',
      amount: 236000,
      name: this.userName,
      prefill: {
        email: this.eMail,
        contact: this.mobile,
        name: this.userName
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function() {
          alert('Closed')
        }
      }
    };
    var successCallback = (payment_id) => {
      // alert('payment_id: ' + payment_id);
      const toast = this.toastController.create({
        message: "Paymet Success",
        position: 'bottom',
        duration:2000        
      });
      toast.present();
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
      // alert(error.description);
      //Navigate to another page using the nav controller
      //this.navCtrl.setRoot(ErrorPage)
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);



  }

  loadlom(ev){
    console.log("Lom:",this.lomName,ev);

  }

  updateCucumber() {
    console.log('Cucumbers new state:' + this.acceptTerms);
  }

  openMod(ev){
    console.log("Terms Model");
    let profileModal = this.modalCtrl.create(TermsPage);
    profileModal.present();
  }

}