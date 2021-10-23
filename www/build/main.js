webpackJsonp([1],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gnote_gnote__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connect_connect__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__you_you__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guest_guest__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__statsmodal_statsmodal__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__memberscore_memberscore__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__showcase_showcase__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_objects_objects__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var HomePage = /** @class */ (function () {
    function HomePage(platform, storage, navCtrl, menuCtrl, toastController, loadingCtrl, http, modalCtrl, obj) {
        // platform.registerBackButtonAction(() => {
        this.platform = platform;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.obj = obj;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.profiledata = [];
        this.show_batch_img = false;
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
    HomePage.prototype.ionViewWillEnter = function () {
        console.log("Pre Obj Name:", this.obj.pageName);
        this.obj.pageName = 'Home';
        console.log("hai:", this.obj.pageName);
        this.load();
        this.load1();
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.obj.pageName = undefined;
        console.log("Post Obj Name:", this.obj.pageName);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('HomePage');
        this.load();
        this.load1();
    };
    HomePage.prototype.Showcase = function () {
        // const toast = this.toastController.create({
        //   message: 'Coming Soon',
        //   position: 'bottom',
        //   duration: 2000,
        //   closeButtonText: 'OK'
        // });
        // toast.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__showcase_showcase__["a" /* ShowcasePage */]);
    };
    HomePage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            _this.storage.get('jibname').then(function (name) {
                var m_id = val;
                _this.membername = name;
                var loader = _this.loadingCtrl.create({
                    // duration: 3000,
                    spinner: 'dots'
                });
                loader.present();
                var body = "?m_id=" + m_id, url = _this.baseURI + "get_member_details.php" + body;
                _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.profiledata = data;
                    console.log("Let Him in:", _this.profiledata);
                    if (_this.profiledata[0].membership_status == 2) {
                        console.log("Need to LogOut");
                        _this.storage.clear();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                    }
                    else {
                        console.log("Let Him in:", _this.profiledata[0].membership_status);
                    }
                    if (_this.profiledata != null) {
                        loader.dismiss();
                        console.log("full");
                    }
                    console.log("Profile data :", _this.profiledata);
                });
                var body1 = "?m_id=" + m_id + "&type=1", url1 = _this.baseURI + "get_meeting_data.php" + body1;
                _this.http.get(url1).map(function (res) { return res.json(); }).subscribe(function (data1) {
                    console.log("1 data :", data1);
                    _this.cg1 = data1[0].connect_given;
                    _this.cr1 = data1[0].connect_received;
                    _this.gg1 = data1[0].gnote_given;
                    _this.gr1 = data1[0].gnote_received;
                    _this.ym1 = data1[0].youandme;
                    _this.g1 = data1[0].guest;
                });
                var body2 = "?m_id=" + m_id + "&type=2", url2 = _this.baseURI + "get_meeting_data.php" + body2;
                _this.http.get(url2).map(function (res) { return res.json(); }).subscribe(function (data2) {
                    console.log("2 data :", data2);
                    _this.cg2 = data2[0].connect_given;
                    _this.cr2 = data2[0].connect_received;
                    _this.gg2 = data2[0].gnote_given;
                    _this.gr2 = data2[0].gnote_received;
                    _this.ym2 = data2[0].youandme;
                    _this.g2 = data2[0].guest;
                });
                var body3 = "?m_id=" + m_id + "&type=3", url3 = _this.baseURI + "get_meeting_data.php" + body3;
                _this.http.get(url3).map(function (res) { return res.json(); }).subscribe(function (data3) {
                    console.log("3 data :", data3);
                    _this.cg3 = data3[0].connect_given;
                    _this.cr3 = data3[0].connect_received;
                    _this.gg3 = data3[0].gnote_given;
                    _this.gr3 = data3[0].gnote_received;
                    _this.ym3 = data3[0].youandme;
                    _this.g3 = data3[0].guest;
                });
            });
        });
    };
    HomePage.prototype.load1 = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var loader = _this.loadingCtrl.create({
                spinner: 'dots'
            });
            loader.present();
            var body = "?m_id=" + m_id, url = _this.baseURI + "get_member_score.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.scoredata = data;
                console.log("Score data :", _this.scoredata);
                if (_this.scoredata == null) {
                    loader.dismiss();
                    _this.show_batch_img = false;
                }
                else {
                    console.log("Score data length:", _this.scoredata.length);
                    var i = _this.scoredata.length - 1;
                    _this.imgpath = _this.scoredata[i].batch_pic;
                    console.log("batch_pic :", _this.imgpath);
                    _this.show_batch_img = true;
                    loader.dismiss();
                }
            });
        });
    };
    HomePage.prototype.memberscorePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__memberscore_memberscore__["a" /* MemberscorePage */], { data: this.scoredata });
    };
    HomePage.prototype.onSegmentChanged = function (segmentButton) {
        console.log("Segment changed to", segmentButton.value);
        var selectedIndex = this.slides.findIndex(function (slide) {
            return slide.id === segmentButton.value;
        });
        this.slider.slideTo(selectedIndex);
    };
    HomePage.prototype.onSlideChanged = function (slider) {
        console.log('Slide changed');
        this.currentSlide = this.slides[slider.getActiveIndex()];
        this.selectedSegment = this.currentSlide.id;
    };
    ////////////////////////Navigation
    HomePage.prototype.gnote = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__gnote_gnote__["a" /* GnotePage */]);
    };
    HomePage.prototype.connect = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__connect_connect__["a" /* ConnectPage */]);
    };
    HomePage.prototype.you = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__you_you__["a" /* YouPage */]);
    };
    HomePage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.guest = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__guest_guest__["a" /* GuestPage */]);
    };
    HomePage.prototype.stats = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__statsmodal_statsmodal__["a" /* StatsmodalPage */]);
        myModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], HomePage.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], HomePage.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('halfDoughnutCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "halfDoughnutCanvas", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>DashBoard</ion-title>\n\n    <img class="grade" *ngIf="show_batch_img" [src]="imgpath" (click)="memberscorePage()" />\n  </ion-navbar>\n</ion-header> \n\n<ion-content>\n  <div class="banner" >\n    <img src="assets/imgs/es-dummy2.png" alt="">\n  </div>\n\n  <div class="profile">\n    <div class="start">\n      <ion-icon name="ios-contacts" (click)="profile()"></ion-icon>\n      <p>Profile</p>\n    </div>\n    <div class="middle" *ngFor="let item of profiledata">\n      <img src="https://admin.jcombiz.com/{{item.profile_photo}}" alt="">\n      <p>{{membername}}</p>\n    </div>\n    <div class="end">\n      <ion-icon name="ios-stats" (click)="stats()"></ion-icon>\n      <p>JCOM Stats</p>\n    </div>\n  </div>\n\n  <div class="overlap">\n\n    <ion-segment [(ngModel)]="selectedSegment" (ionChange)="onSegmentChanged($event)" scrollY="true">\n\n      <ion-segment-button value="first">\n        My Week Stats\n      </ion-segment-button>\n      <ion-segment-button value="second">\n        <marquee behavior="" direction="">My Current Period Stats</marquee>\n\n      </ion-segment-button>\n      <ion-segment-button value="third">\n        My Over All Stats\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-slides #mySlider (ionSlideDidChange)="onSlideChanged($event)">\n      <!-- ===================== -->\n      <ion-slide>\n        <div class="row">\n          <div class="left">\n            <p>\n              Connect Given\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              {{cg1}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              Connect Received\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              {{cr1}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              Gnote Given\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              &#8377; {{gg1}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              Gnote Received\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              &#8377; {{gr1}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              <!-- You & Me -->\n              Showcase\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              {{ym1}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              Guests\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              {{g1}}\n            </p>\n          </div>\n        </div>\n      </ion-slide>\n      <!-- ===================== -->\n      <ion-slide>\n        <div class="row">\n          <div class="left">\n            <p>\n              Connect Given\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              {{cg2}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              Connect Received\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              {{cr2}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              Gnote Given\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              &#8377; {{gg2}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              Gnote Received\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              &#8377; {{gr2}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              <!-- You & Me -->\n              Showcase\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              {{ym2}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              Guests\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              {{g2}}\n            </p>\n          </div>\n        </div>\n      </ion-slide>\n      <!-- ===================== -->\n      <ion-slide>\n        <div class="row">\n          <div class="left">\n            <p>\n              Connect Given\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              {{cg3}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              Connect Received\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              {{cr3}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              Gnote Given\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              &#8377; {{gg3}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              Gnote Received\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              &#8377; {{gr3}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              <!-- You & Me -->\n              Showcase\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              {{ym3}}\n            </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="left">\n            <p>\n              Guests\n            </p>\n          </div>\n          <div class="right">\n            <p class="green">\n              {{g3}}\n            </p>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <div class="jib-flex">\n      <div class="jib-option" (click)="connect()">\n        <span>\n          <ion-icon name="ios-person-add"></ion-icon>\n        </span>\n        <p>CONNECT</p>\n      </div>\n\n      <div class="jib-option" (click)="gnote()">\n        <span class="coin">\n          <p class=""> &#8377;</p>\n        </span>\n        <p>GNOTE</p>\n      </div>\n    </div>\n\n    <div class="jib-flex">\n\n      <!-- <div class="jib-option" (click)="you()">\n        <span>\n          <ion-icon name="ios-people"></ion-icon>\n        </span>\n        <p>YOU & ME</p>\n      </div> -->\n\n      <div class="jib-option" (click)="Showcase()">\n        <span>\n          <ion-icon name="ios-images"></ion-icon>\n        </span>\n        <p>SHOWCASE</p>\n      </div>\n\n      <div class="jib-option" (click)="guest()">\n        <span>\n          <ion-icon name="ios-man-outline"></ion-icon>\n        </span>\n        <p style="font-size: 1.2rem;">GUEST</p>\n      </div>\n    </div>\n    <!-- <div class="flex">\n      <div class="box" (click)="connect()">\n        <ion-icon name="ios-person-add"></ion-icon>\n        <p>CONNECT</p>\n      </div>\n      <div class="box" (click)="gnote()">\n        <p class="rs"> &#8377;</p>\n        <p>GNOTE</p>\n      </div>\n    </div> -->\n\n    <!-- <div class="flex">\n      <div class="box" (click)="you()">\n        <ion-icon name="ios-people"></ion-icon>\n        <p>YOU & ME</p>\n      </div>\n      <div class="box" (click)="guest()">\n        <ion-icon name="ios-man-outline"></ion-icon> \n        <p>GUEST</p>\n      </div>\n    </div> -->\n\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_14__providers_objects_objects__["a" /* ObjectsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hconnect_hconnect__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pconnect_pconnect__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var Port = /** @class */ (function () {
    function Port() {
    }
    return Port;
}());
var ConnectPage = /** @class */ (function () {
    function ConnectPage(platform, navCtrl, storage, navParams, alertCtrl, loadingController, toastController, geolocation, http, contact) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.geolocation = geolocation;
        this.http = http;
        this.contact = contact;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.memberslist = [];
        this.buisnessdata = [];
    }
    ConnectPage.prototype.ionViewDidLoad = function () {
        console.log('ConnectPage');
        this.load();
        this.getTables();
        // this.getGeoLocation();
    };
    ConnectPage.prototype.getGeoLocation = function () {
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log({ resp: resp });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    ConnectPage.prototype.ngOnInit = function () {
        // let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        // let EMAILPATTERN = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var EMAILPATTERN = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
        this.signupform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(EMAILPATTERN)]),
        });
    };
    ConnectPage.prototype.jib = function () {
        if (this.ctype == 1) {
            this.hideMe = true;
        }
        if (this.ctype == 2) {
            this.hideMe = false;
            this.cstatus = 0;
            this.name = null;
            this.number = null;
        }
        if (this.ctype == 3) {
            this.hideMe = false;
            this.cstatus = 0;
            this.name = null;
            this.number = null;
        }
    };
    ConnectPage.prototype.withjib = function () {
        var _this = this;
        this.storage.get('jibname').then(function (pname) {
            _this.storage.get('jibnum').then(function (pnum) {
                _this.storage.get('jibmail').then(function (pemail) {
                    _this.name = pname;
                    _this.number = pnum;
                    _this.email = pemail;
                    console.log("email :", pemail);
                    console.log("name :", pname);
                    console.log("num :", pnum);
                });
            });
        });
    };
    ConnectPage.prototype.withnojib = function () {
        this.name = null;
        this.number = null;
    };
    ConnectPage.prototype.load = function () {
        var _this = this;
        this.storage.get('jib_table').then(function (tableId) {
            var table_id = tableId;
            _this.storage.get('jibmid').then(function (val) {
                var m_id = val;
                var body = "?m_id=" + m_id + "&table_id=" + table_id, type = "application/x-www-form-urlencoded; charset=UTF-8", 
                // headers: any = new Headers({ 'Content-Type': type }),
                url = _this.baseURI + "get_member_list.php" + body;
                _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.memberslist = data;
                    console.log("Members data :", _this.memberslist);
                });
            });
        });
        var url = this.baseURI + "get_business_category.php";
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("Business data :", data);
            _this.buisnessdata = data;
        });
    };
    ConnectPage.prototype.loadTable = function (ev) {
        var _this = this;
        console.log({ ev: ev }, this.table);
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id + "&table_id=" + _this.table.table, type = "application/x-www-form-urlencoded; charset=UTF-8", 
            // headers: any = new Headers({ 'Content-Type': type }),
            url = _this.baseURI + "get_member_list.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.memberslist = data;
                console.log("Members data :", _this.memberslist);
                _this.member = null;
                _this.buisness = null;
            });
        });
    };
    ConnectPage.prototype.getTables = function () {
        var _this = this;
        var url = this.baseURI + "get_jcom_table.php";
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("Business data :", data);
            _this.tables = data;
            var _loop_1 = function (i) {
                _this.storage.get('jib_table').then(function (tableId) {
                    if (tableId == i.table) {
                        _this.table = i;
                    }
                });
            };
            for (var _i = 0, _a = _this.tables; _i < _a.length; _i++) {
                var i = _a[_i];
                _loop_1(i);
            }
        });
    };
    ConnectPage.prototype.getContacts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var SelectedContact, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Contact Click");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.contact.pickContact()];
                    case 2:
                        SelectedContact = _a.sent();
                        console.log("All :", SelectedContact);
                        console.log("Name :", SelectedContact.displayName);
                        console.log("Number :", SelectedContact.phoneNumbers[0].value);
                        if (SelectedContact.emails == null) {
                            this.name = SelectedContact.displayName;
                            this.number = SelectedContact.phoneNumbers[0].value;
                            this.email = null;
                        }
                        else {
                            this.name = SelectedContact.displayName;
                            this.number = SelectedContact.phoneNumbers[0].value;
                            this.email = SelectedContact.emails[0].value;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        // alert(e);
                        console.log("Error on Contact :", e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ConnectPage.prototype.confirm = function () {
        var _this = this;
        if (this.member == null) {
            console.log("hai");
            var toast = this.toastController.create({
                message: 'Choose the Member',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.ctype == null) {
            var toast = this.toastController.create({
                message: 'Choose the Connect Type',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.cstatus == null) {
            var toast = this.toastController.create({
                message: 'Choose the Connect Status',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.buisness == null) {
            var toast = this.toastController.create({
                message: 'Choose the Buisness Category',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.name == null) {
            var toast = this.toastController.create({
                message: 'Fill the Name',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.number == null) {
            var toast = this.toastController.create({
                message: 'Fill the Number',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.email != null || this.range == null) {
            if (this.signupform.invalid) {
                var toast = this.toastController.create({
                    message: 'Fill Valid Email',
                    position: 'bottom',
                    duration: 2000
                });
                toast.present();
            }
            else if (this.range == null) {
                var toast = this.toastController.create({
                    message: 'Choose the range',
                    position: 'bottom',
                    duration: 2000
                });
                toast.present();
            }
            else {
                this.post();
            }
        }
        else {
            console.log("post");
            this.storage.get('jibmid').then(function (val) {
                var m_id = val;
                console.log("Member :", _this.member);
                console.log("ctype :", _this.ctype);
                console.log("cstatus :", _this.cstatus);
                console.log("business :", _this.buisness);
                console.log("name :", _this.name);
                console.log("number :", _this.number);
                console.log("email :", _this.email);
                console.log("address :", _this.address);
                console.log("comments :", _this.comments);
                console.log("range :", _this.range);
                var loading = _this.loadingController.create({
                // message: "Hellooo",
                });
                loading.present();
                var body = "?m_id=" + m_id + "&to_member_id=" + _this.member.id + "&connect_type=" + _this.ctype + "&connect_status="
                    + _this.cstatus + "&business_category=" + _this.buisness.id + "&connect_name=" + _this.name
                    + "&mobile_no=" + _this.number + "&email_id=" + _this.email + "&address=" + _this.address
                    + "&comments=" + _this.comments + "&about_connect=" + _this.range, type = "application/x-www-form-urlencoded; charset=UTF-8", 
                // headers: any = new Headers({ 'Content-Type': type }),
                url = _this.baseURI + "send_connect.php" + body;
                _this.http.post(url, body).map(function (res) { return res.json(); }).subscribe(function (data) {
                    console.log("Result :", data);
                    if (data[0].status == "success") {
                        _this.toast();
                        loading.dismiss();
                    }
                });
            });
        }
    };
    ConnectPage.prototype.post = function () {
        var _this = this;
        console.log("post");
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            console.log("Member :", _this.member);
            console.log("ctype :", _this.ctype);
            console.log("cstatus :", _this.cstatus);
            console.log("business :", _this.buisness);
            console.log("name :", _this.name);
            console.log("number :", _this.number);
            console.log("email :", _this.email);
            console.log("address :", _this.address);
            console.log("comments :", _this.comments);
            console.log("range :", _this.range);
            var loading = _this.loadingController.create({
            // message: "Hellooo",
            });
            loading.present();
            var body = "?m_id=" + m_id + "&to_member_id=" + _this.member.id + "&connect_type=" + _this.ctype + "&connect_status="
                + _this.cstatus + "&business_category=" + _this.buisness.id + "&connect_name=" + _this.name
                + "&mobile_no=" + _this.number + "&email_id=" + _this.email + "&address=" + _this.address
                + "&comments=" + _this.comments + "&about_connect=" + _this.range, type = "application/x-www-form-urlencoded; charset=UTF-8", 
            // headers: any = new Headers({ 'Content-Type': type }),
            url = _this.baseURI + "send_connect.php";
            var data = {
                m_id: m_id,
                to_member_id: _this.member.id,
                connect_type: _this.ctype,
                connect_status: _this.cstatus,
                business_category: _this.buisness.id,
                connect_name: _this.name,
                mobile_no: _this.number,
                email_id: _this.email,
                address: _this.address,
                comments: _this.comments,
                about_connect: _this.range
            };
            _this.http.post(url, data).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log("Result :", data);
                if (data[0].status == "success") {
                    _this.toast();
                    loading.dismiss();
                }
            });
        });
    };
    ConnectPage.prototype.toast = function () {
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
        var alert = this.alertCtrl.create({
            title: 'Success',
            buttons: ['OK']
        });
        alert.present();
    };
    ConnectPage.prototype.signup = function () {
        console.log("SignUp!");
    };
    ConnectPage.prototype.hconnect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__hconnect_hconnect__["a" /* HconnectPage */]);
    };
    ConnectPage.prototype.pending_connect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pconnect_pconnect__["a" /* PconnectPage */]);
    };
    ConnectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-connect',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/connect/connect.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Connect Entry</ion-title>\n    <div class="ic">\n      <ion-icon (click)="hconnect()" name="list-box"></ion-icon>\n    </div>\n    <!-- <div style="float: right;position: relative;right: 8px;bottom: 7px;color: white;" > -->\n    <div class="ic" >\n      <ion-icon class="ic-ref" (click)="pending_connect()" name="ios-timer-outline"></ion-icon>\n    </div>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="rows">\n    <div class="lab">\n      <ion-icon name="albums"></ion-icon>\n    </div>\n    <div class="inp">\n      <select-searchable class="uplo" item-content placeholder="Select Table " [(ngModel)]="table" [items]="tables"\n        itemValueField="table" itemTextField="table_name"  (onChange)="loadTable($event)" [canSearch]="true">\n      </select-searchable>\n    </div>\n  </div>\n\n  <div class="rows">\n    <div class="lab">\n      <ion-icon name="person-add"></ion-icon>\n    </div>\n    <div class="inp">\n      <select-searchable class="uplo" item-content placeholder="Connect To" [(ngModel)]="member" [items]="memberslist"\n        itemValueField="id" itemTextField="name" [canSearch]="true">\n      </select-searchable>\n      <!-- (onChange)="portChange($event)" -->\n    </div>\n  </div>\n\n  <p class="label">Connect Type</p>\n  <div class="flex">\n    <ion-row class="radio-btn" radio-group [(ngModel)]="ctype">\n      <ion-col>\n        <ion-item>\n          <ion-label>JCOM</ion-label>\n          <ion-radio value="1" (click)="jib()"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>JCI</ion-label>\n          <ion-radio value="2" (click)="jib()"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Non-JCI</ion-label>\n          <ion-radio value="3" (click)="jib()"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf="hideMe">\n    <p class="label">Connect Status</p>\n    <div class="flex">\n      <!-- <button ion-button class="new-btn">Within JIB</button>\n    <button ion-button class="new-btn">Within JCI - JIB </button> -->\n      <ion-row class="radio-btn" radio-group [(ngModel)]="cstatus">\n        <ion-col>\n          <ion-item>\n            <ion-label>Self Connect</ion-label>\n            <!-- <ion-label>Within JCOM</ion-label> -->\n            <ion-radio value="1" (click)="withjib()"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label>Within JCI - JCOM</ion-label>\n            <ion-radio value="2" (click)="withnojib()"></ion-radio>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div class="rows">\n    <div class="lab">\n      <ion-icon name="ios-briefcase"></ion-icon>\n    </div>\n    <div class="inp">\n      <select-searchable class="uplo" item-content placeholder="Business Category" [(ngModel)]="buisness"\n        [items]="buisnessdata" itemValueField="id" itemTextField="category" [canSearch]="true">\n      </select-searchable>\n    </div>\n  </div>\n\n  <div class="rows">\n    <div class="lab" (click)="getContacts()">\n      <ion-icon name="ios-phone-portrait"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item>\n        <!-- [readonly]=true -->\n        <ion-input type="text" placeholder="From Phone Book" [(ngModel)]="name"></ion-input>\n      </ion-item>\n    </div>\n  </div>\n  <div class="rows">\n    <div class="lab">\n      <ion-icon name="ios-call"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item>\n        <ion-input type="tel" placeholder="Mobile Number" pattern="[0-9]*" [(ngModel)]="number"></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <form novalidate (ngSubmit)="signup()" [formGroup]="signupform">\n    <div class="rows">\n      <div class="lab">\n        <ion-icon name="ios-mail"></ion-icon>\n      </div>\n      <div class="inp">\n        <ion-item>\n          <ion-input type="email" placeholder="E-Mail" [(ngModel)]="email" formControlName="email"\n            [class.error1]="!signupform.controls.email.valid && signupform.controls.email.dirty"></ion-input>\n        </ion-item>\n        <!-- <ion-item no-lines *ngIf="( signupform.get(\'email\').hasError(\'minlength\') || signupform.get(\'email\').hasError(\'pattern\') ||signupform.get(\'email\').hasError(\'required\') ) && signupform.get(\'email\').touched">\n          <div class="error" *ngIf="signupform.get(\'email\').hasError(\'required\') && signupform.get(\'email\').touched" >\n              Fill the email\n          </div>\n          <div class="error" *ngIf="signupform.get(\'email\').hasError(\'pattern\') && signupform.get(\'email\').touched">\n              Email address invalid\n          </div>\n        </ion-item> -->\n      </div>\n    </div>\n  </form>\n\n  <div class="comment">\n    <ion-item>\n      <ion-textarea placeholder="Address " [(ngModel)]="address">\n      </ion-textarea>\n    </ion-item>\n  </div>\n\n  <div class="comment">\n    <ion-item>\n      <ion-textarea placeholder="comments " [(ngModel)]="comments">\n      </ion-textarea>\n    </ion-item>\n  </div>\n\n  <p class="label">How about this Connect ?</p>\n\n  <div class="range">\n    <div class="total-range"></div>\n      <ion-row class="radio-btn" radio-group [(ngModel)]="range">\n        <div class="individual-hot">\n          <ion-icon *ngIf="range == 1" ios="ios-checkmark" md="md-checkmark"></ion-icon>\n          <ion-col class="hot">\n            <ion-item>\n              <ion-label>Hot</ion-label>\n              <ion-radio value="1"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </div>\n        <div class="individual-med">\n          <ion-icon *ngIf="range == 2" ios="ios-checkmark" md="md-checkmark"></ion-icon>\n          <ion-col class="med">\n            <ion-item>\n              <ion-label>Medium</ion-label>\n              <ion-radio value="2"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </div>\n        <div class="individual-cold">\n          <ion-icon *ngIf="range == 3" ios="ios-checkmark" md="md-checkmark"></ion-icon>\n          <ion-col class="cold">\n            <ion-item>\n              <ion-label>Cold</ion-label>\n              <ion-radio value="3"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </div>\n      </ion-row>\n    </div>\n  <!-- </div> -->\n\n  <div class="conf-btn">\n    <button ion-button (click)="confirm()">\n      Confirm\n    </button>\n  </div>\n\n</ion-content>\n\n<!-- <style type="text/css">\n  .error {\n    color: rgb(223, 62, 62);\n    font-size: 11px;\n  }\n\n  .error1 {\n    color: rgb(75, 75, 75);\n    border-bottom: 1px solid #ff0000;\n  } -->\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/connect/connect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* Contacts */]])
    ], ConnectPage);
    return ConnectPage;
}());

//# sourceMappingURL=connect.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelconnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModelconnectPage = /** @class */ (function () {
    function ModelconnectPage(navCtrl, viewCtrl, callNumber, params, storage, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.callNumber = callNumber;
        this.params = params;
        this.storage = storage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        console.log("MT:", this.params.get("data9"));
        console.log("TN:", this.params.get("data10"));
        this.ab = this.params.get("data");
        this.ad = this.params.get("data1");
        this.bc = this.params.get("data2");
        this.com = this.params.get("data3");
        this.cn = this.params.get("data4");
        this.cs = this.params.get("data5");
        this.ct = this.params.get("data6");
        this.em = this.params.get("data7");
        this.mn = this.params.get("data8");
        this.meeting_type = this.params.get("data9");
        this.table_name = this.params.get("data10");
        this.t = this.params.get("data11");
        this.ci = this.params.get("data12");
        console.log("MT:", this.meeting_type);
        console.log("TN:", this.table_name);
        console.log("T:", this.t);
        console.log("Connect ID:", this.ci);
    }
    ModelconnectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModelconnectPage');
    };
    ModelconnectPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModelconnectPage.prototype.call = function (number) {
        console.log("number :", number);
        this.callNumber.callNumber(number, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return alert(err); });
    };
    ModelconnectPage.prototype.mark = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?connect_id=" + _this.ci, url = _this.baseURI + "send_marku.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log({ data: data });
                if (data[0].status == "Connect Marked Unsuccessfull") {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Success',
                        subTitle: data[0].status,
                        buttons: [
                            {
                                text: 'OK',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Ok clicked');
                                    _this.viewCtrl.dismiss(true);
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
            });
        });
    };
    ModelconnectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modelconnect',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/modelconnect/modelconnect.html"*/'<ion-content>\n  <div class="connect">\n    <!-- <div class="row">\n      <p class="left">connect : </p>\n      <p class="right">Elangathir</p>\n    </div> -->\n    <hr>\n    <div class="row">\n      <p class="left">Connect Type  </p>\n      <p class="right">{{ct}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left">Connect Status  </p>\n      <p class="right">{{cs}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left">Business Category  </p>\n      <p class="right">{{bc}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Connect Name  </p>\n      <p class="right">{{cn}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Mobile  </p>\n      <p class="right">{{mn}} <span> <ion-icon name="ios-call" (click)="call(mn)"></ion-icon> </span> </p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Email  </p>\n      <p class="right">{{em}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Address  </p>\n      <p class="right">{{ad}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Comment  </p>\n      <p class="right">{{com}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Table Name  </p>\n      <p class="right">{{table_name}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Meeting Type  </p>\n      <p class="right">{{meeting_type}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> How About  Connect  </p>\n      <p class="right">{{ab}}</p>\n    </div>\n    <hr>\n\n    <div style="text-align: center;">\n      <button *ngIf="t == 1"  ion-button round color="danger" (click)="mark()">Mark As Unsuccessful \n      </button>\n    </div>\n  \n\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <button ion-button full (click)="dismiss()">Close\n  </button>\n</ion-footer>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/modelconnect/modelconnect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ModelconnectPage);
    return ModelconnectPage;
}());

//# sourceMappingURL=modelconnect.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hyou_hyou__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Port = /** @class */ (function () {
    function Port() {
    }
    return Port;
}());
var YouPage = /** @class */ (function () {
    function YouPage(navCtrl, storage, http, alertCtrl, loadingController, toastController, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.navParams = navParams;
        this.today = new Date().toISOString();
        this.minDate = "2019-01-01";
        this.maxDate = this.today;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.memberslist = [];
    }
    YouPage.prototype.ionViewDidLoad = function () {
        console.log('You&Me Page');
        this.load();
    };
    YouPage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id, type = "application/x-www-form-urlencoded; charset=UTF-8", 
            // headers: any = new Headers({ 'Content-Type': type }),
            url = _this.baseURI + "get_member_list.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.memberslist = data;
                console.log("Members data :", _this.memberslist);
            });
        });
    };
    YouPage.prototype.confirm = function () {
        var _this = this;
        if (this.member == null) {
            var toast = this.toastController.create({
                message: 'Choose the Member',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.place == null) {
            var toast = this.toastController.create({
                message: 'Fill the Place',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.mydate == null) {
            var toast = this.toastController.create({
                message: 'Choose the Date',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.comment == null) {
            var toast = this.toastController.create({
                message: 'Fill Topics of Conversation',
                position: 'bottom',
            });
            toast.present();
        }
        else {
            this.storage.get('jibmid').then(function (val) {
                var m_id = val;
                console.log("Member :", _this.member);
                console.log("place :", _this.place);
                console.log("date :", _this.mydate);
                console.log("coments :", _this.comment);
                var loading = _this.loadingController.create({
                // message: "Hellooo",
                });
                loading.present();
                var body = "?m_id=" + m_id + "&to_member_id=" + _this.member.id + "&date=" + _this.mydate + "&place="
                    + _this.place + "&comments=" + _this.comment, type = "application/x-www-form-urlencoded; charset=UTF-8", 
                // headers: any = new Headers({ 'Content-Type': type }),
                url = _this.baseURI + "send_youandme.php" + body;
                _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                    console.log("Result :", data);
                    if (data[0].status == "success") {
                        _this.toast();
                        loading.dismiss();
                    }
                });
            });
        }
    };
    YouPage.prototype.toast = function () {
        this.member = null;
        this.place = null;
        this.mydate = null;
        this.comment = null;
        var alert = this.alertCtrl.create({
            title: 'Success',
            buttons: ['OK']
        });
        alert.present();
    };
    YouPage.prototype.hconnect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__hyou_hyou__["a" /* HyouPage */]);
    };
    YouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-you',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/you/you.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>You & Me Slip</ion-title>\n    <div class="ic" (click)="hconnect()">\n        <ion-icon name="list-box"></ion-icon>\n      </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <!-- <div class="row">\n    <div class="lab">\n      <ion-icon name="ios-hand"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item>\n        <ion-select placeholder="You" [(ngModel)]="you">\n          <ion-option value="1">Elangathir</ion-option>\n          <ion-option value="2">Hari Sakthi</ion-option>\n          <ion-option value="3">Sudharsanam</ion-option>\n          <ion-option value="4">Govindaraj</ion-option>\n          <ion-option value="5">Chandru</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n  </div> -->\n\n  <div class="row">\n    <div class="lab">\n      <ion-icon name="person-add"></ion-icon>\n    </div>\n    <div class="inp">\n      <!-- <ion-item>\n        <ion-select placeholder="Choose" [(ngModel)]="member">\n            <ion-option *ngFor="let item of memberslist" value="{{item.id}}">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item> -->\n\n      <!-- <ion-item> -->\n        <select-searchable\n        class="uplo"\n            item-content\n            placeholder = "Choose"\n            [(ngModel)]="member"\n            [items]="memberslist"\n            itemValueField="id"\n            itemTextField="name"\n            [canSearch]="true">\n        </select-searchable>\n        <!-- (onChange)="portChange($event)" -->\n    <!-- </ion-item> -->\n\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="lab">\n      <ion-icon name="ios-pin"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item>\n        <ion-input type="text" placeholder="Place" [(ngModel)]="place"></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="lab">\n      <ion-icon name="ios-calendar"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item>\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat="D - MMM - YYYY" [(ngModel)]="mydate" min={{minDate}}\n        max={{maxDate}} min = 2019></ion-datetime>\n      </ion-item>\n    </div>\n  </div>\n\n  <div class="comment">\n    <ion-item>\n      <ion-textarea placeholder="comments" [(ngModel)]="comment">\n      </ion-textarea>\n    </ion-item>\n  </div>\n\n  <!-- <div class="comments">\n    <ion-textarea placeholder="Topics of Conversation">\n    </ion-textarea>\n  </div> -->\n\n  <div class="conf-btn">\n    <button ion-button (click)="confirm()">\n      Confirm\n    </button>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/you/you.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], YouPage);
    return YouPage;
}());

//# sourceMappingURL=you.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profilemodal_profilemodal__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_crop__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64_ngx__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, crop, base64, alertCtrl, storage, loadingCtrl, navParams, camera, modalCtrl, http, file, filePath, toastController, loadingController) {
        this.navCtrl = navCtrl;
        this.crop = crop;
        this.base64 = base64;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.file = file;
        this.filePath = filePath;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.profiledata = [];
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ProfilePage');
        this.load();
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        console.log("hai");
        this.load();
    };
    ProfilePage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id, type = "application/x-www-form-urlencoded; charset=UTF-8", 
            // headers: any = new Headers({ 'Content-Type': type }),
            url = _this.baseURI + "get_member_details.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.profiledata = data;
                _this.business_name = data[0].business_name;
                console.log("Profile data :", _this.profiledata);
            });
        });
    };
    ProfilePage.prototype.image = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            targetWidth: 360,
            // allowEdit: true,
            targetHeight: 360
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = imageData;
            // this.base64Image = 'data:image/jpeg;base64,' + imageData;
            if (_this.base64Image !== null) {
                console.log("Base64:", _this.base64Image);
                // this.upload();
                var crops = {
                    quality: 80,
                    targetWidth: 360,
                    // allowEdit: true,
                    targetHeight: 360
                };
                _this.crop.crop(_this.base64Image, crops)
                    .then(function (newImage) {
                    _this.base64Image = newImage;
                    // this.croppedImagepath = this.base64Image;
                    console.log('new image path is: ' + newImage);
                    _this.filePath.resolveNativePath(newImage)
                        .then(function (resolvePath) {
                        console.log(resolvePath);
                        var copyPath = resolvePath;
                        var splitPath = copyPath.split('/');
                        var imageName = splitPath[splitPath.length - 1];
                        var filePath = resolvePath.split(imageName)[0];
                        _this.file.readAsDataURL(filePath, imageName).then(function (base64) {
                            //  this.croppedImagepath = base64;
                            //  this.isLoading = false;
                            console.log({ base64: base64 });
                            _this.resolvePath = base64;
                            _this.upload();
                            //  alert("Image Cropped Successfully!");
                        }, function (error) {
                            alert('Error in showing image' + error);
                            console.log({ error: error });
                            //  this.isLoading = false;
                        });
                    }, function (err) {
                        console.log(err);
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
                }, function (error) {
                    console.error('Error cropping image', error);
                    alert("error in Crop!");
                });
            }
        }, function (err) {
            alert("Code101:" + "Error In Image Edit!");
            console.log({ err: err });
        });
    };
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
    ProfilePage.prototype.editprofile = function () {
        var _this = this;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__profilemodal_profilemodal__["a" /* ProfilemodalPage */]);
        myModal.onDidDismiss(function (data) {
            _this.load();
        });
        myModal.present();
    };
    ProfilePage.prototype.upload = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var loading = _this.loadingCtrl.create({
                duration: 2000
            });
            loading.present();
            var url = 'https://admin.jcombiz.com/jcom/upload_photo.php';
            var postData = new FormData();
            postData.append('file', _this.resolvePath);
            postData.append('m_id', m_id);
            _this.http.post(url, postData).subscribe(function (result) {
                loading.dismiss();
                _this.load();
            });
        });
    };
    ProfilePage.prototype.pinChange = function () {
        var _this = this;
        console.log("PinNumber:", this.pincode);
        if (this.pincode.length == 6) {
            console.log("PinNumber is Valid");
            var body = "?pincode=" + this.pincode, type = "application/x-www-form-urlencoded; charset=UTF-8", 
            // headers: any = new Headers({ 'Content-Type': type }),
            url = this.baseURI + "get_pincode.php" + body;
            this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.city = data[0].city;
                _this.state = data[0].state;
                _this.district = data[0].city;
                console.log("Profile data :", data, _this.city, _this.state);
            });
        }
        else if (this.pincode.length > 6) {
            console.log("PinNumber is Exide");
        }
        else {
            console.log("PinNumber is Less");
        }
    };
    ProfilePage.prototype.save = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id_val = val;
            var loading = _this.loadingCtrl.create({});
            loading.present();
            var postdata = {
                m_id: m_id_val,
                business_name: _this.business_name,
                address: _this.address,
                city: _this.city,
                district: _this.district,
                state: _this.state,
                pincode: _this.pincode,
                b_mobile_no: _this.b_mobile_no,
                b_email_id: _this.b_email_id,
                website: _this.website,
                business_info: _this.business_info,
                business_keywords: _this.business_keywords,
                products: _this.products,
                needed_contacts: _this.needed_contacts,
            };
            var url = _this.baseURI + "send_member_details.php";
            _this.http.post(url, postdata).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log("Result :", data);
                if (data[0].status == "success") {
                    loading.dismiss();
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Profile Updated Successfully',
                        buttons: ['Close']
                    });
                    alert_1.present();
                }
            });
        });
    };
    // renew(amount){
    //   console.log("Paymnet Option Will Add Soon!");
    // }
    ProfilePage.prototype.renew = function (amount) {
        var _this = this;
        console.log("Amount", amount);
        this.amount = amount;
        var newAmount = amount + '00';
        console.log({ newAmount: newAmount });
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
                    alert('Closed');
                }
            }
        };
        console.log('payment', options);
        var successCallback = function (payment_id) {
            // alert('payment_id: ' + payment_id);
            var toast = _this.toastController.create({
                message: "Paymet Success",
                position: 'bottom',
                duration: 2000
            });
            toast.present();
            // alert(payment_id);
            _this.signup(payment_id);
            //Navigate to another page using the nav controller
            //this.navCtrl.setRoot(SuccessPage)
            //Inject the necessary controller to the constructor
        };
        var cancelCallback = function (error) {
            console.log({ error: error });
            var str = error.description;
            var str_array = str.split(',');
            for (var i = 0; i < str_array.length; i++) {
                // Trim the excess whitespace.
                str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
                // Add additional code here, such as:
                if (str_array[i].includes("description")) {
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
    };
    ProfilePage.prototype.signup = function (payment_id_val) {
        var _this = this;
        var loading = this.loadingController.create({});
        loading.present();
        var body = "?m_id=" + this.profiledata[0].m_id + "&payment_id=" + payment_id_val + "&amount=" + this.amount, type = "application/x-www-form-urlencoded; charset=UTF-8", url = this.baseURI + "send_renewal.php" + body;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("get_signup data :", data);
            if (data) {
                var toast = _this.toastController.create({
                    message: data[0].message,
                    position: 'bottom',
                    duration: 2000
                });
                toast.present();
                _this.load();
            }
            else {
                console.log("Signup status");
            }
            loading.dismiss();
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Your Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content *ngFor="let item of profiledata">\n\n  <div class="dp" style="height: 360px; text-align:center;" >\n    <!-- (click)="image()" -->\n    <img src="https://admin.jcombiz.com/{{item.profile_photo}}" alt="">\n  </div>\n  <div class="tint">\n    <p class="t-name">{{item.title}} - {{item.name}}</p>\n    <p class="t-company">{{item.business_name}}</p>\n    <p class="t-work">Classification :\n      <span>{{item.business_category}}</span>\n    </p>\n    <p class="t-work">Valid Upto :\n      <span>{{item.membership_expiry}}</span>\n    </p>\n    <!-- <p class="t-work">\n      <button style="color: white !important;" *ngIf="item.membership_renewal" (click)="renew(item.membership_amount)" ion-button>Renew Now</button>\n    </p> -->\n    <ion-grid size="12"><ion-row>\n      <ion-col class="Renew">\n        <button *ngIf="item.membership_renewal" (click)="renew(item.membership_amount)" ion-button>Renew Now</button>\n      </ion-col> \n    </ion-row></ion-grid>\n    \n  </div>\n\n\n  <div class="overlap">\n\n    <ion-card>\n      <ion-card-header>\n        Address\n        <!-- <ion-icon name="ios-create-outline" (click)="editprofile()"></ion-icon> -->\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label fixed>Business Name</ion-label>\n          <ion-input type="text" placeholder="Business Name" value="{{item.business_name}}" [(ngModel)] = "business_name"></ion-input>\n        </ion-item>\n        <ion-item class="textin">\n          <ion-label fixed>Address</ion-label>\n          <ion-textarea type="text" style="height: 100px;" placeholder="Address" value="{{item.address}}" [(ngModel)] = "address">\n          </ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>Pin</ion-label>\n          <ion-input type="tel" placeholder="Pincode" value="{{item.pincode}}" (ionChange)="pinChange()" [(ngModel)] = "pincode"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>City/Town</ion-label>\n          <ion-input type="text" placeholder="Your City/Town" value="{{item.city}}" [(ngModel)] = "city"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>District</ion-label>\n          <ion-input type="text" placeholder="Your District" value="{{item.district}}" [(ngModel)] = "district"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>State</ion-label>\n          <ion-input type="text" placeholder="Your State" value="{{item.state}}" [(ngModel)] = "state"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>Country</ion-label>\n          <ion-input type="text" placeholder="Your State" value="{{item.country}}" [readonly]=true></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>Zone</ion-label>\n          <ion-input type="text" placeholder="Your State" value="{{item.zone}}" [readonly]=true></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>LOM</ion-label>\n          <ion-input type="text" placeholder="Your State" value="{{item.lom}}" [readonly]=true></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>JCOM Table</ion-label>\n          <ion-input type="text" placeholder="Your State" value="{{item.jib_table}}" [readonly]=true></ion-input>\n        </ion-item>\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Contact\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label fixed>Business No :</ion-label>\n          <ion-input type="text" placeholder="Tele-Number" value="{{item.b_mobile_no}}" [(ngModel)] = "b_mobile_no"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>Personal No :</ion-label>\n          <ion-input type="text" placeholder="Mobile Number" value="{{item.p_mobile_no}}" [readonly]=true></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>Business Mail</ion-label>\n          <ion-input type="text" placeholder="E-Mail" value="{{item.b_email_id}}" [(ngModel)] = "b_email_id"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>Personal Mail</ion-label>\n          <ion-input type="text" placeholder="E-Mail" value="{{item.p_email_id}}" [readonly]=true></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>Website</ion-label>\n          <ion-input type="text" placeholder="Website Link" value="{{item.website}}" [(ngModel)] = "website"></ion-input>\n        </ion-item>\n\n      </ion-card-content>\n    </ion-card>\n\n    <p class="labl">Business Information</p>\n    <ion-card class="txt-ar">\n      <ion-item>\n        <ion-textarea placeholder="Type Your Business Discription" value="{{item.business_info}}" [(ngModel)] = "business_info">\n        </ion-textarea>\n      </ion-item>\n    </ion-card>\n\n    <p class="labl">Business Keywords</p>\n    <ion-card class="txt-ar">\n      <ion-item>\n        <ion-textarea placeholder="Type Your Business Keywords" value="{{item.business_keywords}}" [(ngModel)] = "business_keywords">\n        </ion-textarea>\n      </ion-item>\n    </ion-card>\n\n    <p class="labl">Products</p>\n    <ion-card class="txt-ar">\n      <ion-item>\n        <ion-textarea placeholder="Type Your Products" value="{{item.products}}" [(ngModel)] = "products" >\n        </ion-textarea>\n      </ion-item>\n    </ion-card>\n\n    <p class="labl">Needed Contacts</p>\n    <ion-card class="txt-ar">\n      <ion-item>\n        <ion-textarea placeholder="Type Your Needed Contacts" value="{{item.needed_contacts}}" [(ngModel)] = "needed_contacts">\n        </ion-textarea>\n      </ion-item>\n    </ion-card>\n\n  </div>\n\n  <div class="conf-btn">\n    <button ion-button (click)="save()">\n      Save\n    </button>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64_ngx__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hguest_hguest__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var Port = /** @class */ (function () {
    function Port() {
    }
    return Port;
}());
var GuestPage = /** @class */ (function () {
    function GuestPage(navCtrl, storage, http, alertCtrl, contact, loadingController, toastController, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.contact = contact;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.navParams = navParams;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.buisnessdata = [];
    }
    GuestPage.prototype.ionViewDidLoad = function () {
        console.log('GuestPage');
        this.load();
    };
    GuestPage.prototype.ngOnInit = function () {
        // let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        // let EMAILPATTERN = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var EMAILPATTERN = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
        this.signupform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            mail: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(EMAILPATTERN)]),
        });
    };
    GuestPage.prototype.load = function () {
        var _this = this;
        var url = this.baseURI + "get_business_category.php";
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("Business data :", data);
            _this.buisnessdata = data;
        });
    };
    GuestPage.prototype.confirm = function () {
        var _this = this;
        if (this.name == null) {
            var toast = this.toastController.create({
                message: 'Fill the Name',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.mobilenumber == null) {
            var toast = this.toastController.create({
                message: 'Fill the Mobile Number',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.city == null) {
            var toast = this.toastController.create({
                message: 'Fill the City',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.buisness == null) {
            var toast = this.toastController.create({
                message: 'Choose Business Category',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.ctype == null) {
            var toast = this.toastController.create({
                message: 'Choose Type',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else {
            this.storage.get('jibmid').then(function (val) {
                var m_id = val;
                console.log("name :", _this.name);
                console.log("mobilenumber :", _this.mobilenumber);
                console.log("email :", _this.mail);
                console.log("city :", _this.city);
                console.log("business  :", _this.buisness);
                console.log("type  :", _this.ctype);
                console.log("comment  :", _this.comment);
                var loading = _this.loadingController.create({});
                loading.present();
                //     
                var postdata = {
                    m_id: m_id,
                    guest_name: _this.name,
                    mobile_no: _this.mobilenumber,
                    email_id: _this.mail,
                    guest_city: _this.city,
                    business_category: _this.buisness.id,
                    type: _this.ctype,
                    comments: _this.comment
                }, url = _this.baseURI + "send_guest.php";
                _this.http.post(url, postdata).map(function (res) { return res.json(); }).subscribe(function (data) {
                    console.log("Result :", data);
                    if (data[0].status == "success") {
                        _this.toast();
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
    };
    GuestPage.prototype.toast = function () {
        this.name = null;
        this.mobilenumber = null;
        this.mail = null;
        this.city = null;
        this.buisness = null;
        this.ctype = null;
        this.comment = null;
        var alert = this.alertCtrl.create({
            title: 'Success',
            buttons: ['OK']
        });
        alert.present();
    };
    GuestPage.prototype.getContacts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var SelectedContact, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Contact Click");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.contact.pickContact()];
                    case 2:
                        SelectedContact = _a.sent();
                        console.log("All :", SelectedContact);
                        console.log("Name :", SelectedContact.displayName);
                        console.log("Number :", SelectedContact.phoneNumbers[0].value);
                        if (SelectedContact.emails == null) {
                            this.name = SelectedContact.displayName;
                            this.mobilenumber = SelectedContact.phoneNumbers[0].value;
                            this.mail = null;
                        }
                        else {
                            this.name = SelectedContact.displayName;
                            this.mobilenumber = SelectedContact.phoneNumbers[0].value;
                            this.mail = SelectedContact.emails[0].value;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        // alert(e);
                        console.log("Error on Contact :", e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GuestPage.prototype.hguest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__hguest_hguest__["a" /* HguestPage */]);
    };
    GuestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-guest',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/guest/guest.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Guest Registration</ion-title>\n    <div class="ic" (click)="hguest()">\n      <ion-icon name="list-box"></ion-icon>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div class="row">\n    <div class="lab" (click)="getContacts()">\n      <ion-icon name="ios-person"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item>\n        <ion-input type="text" placeholder="From Phone Book"  [(ngModel)]="name"></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="lab">\n      <ion-icon name="ios-phone-portrait"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item>\n        <ion-input type="tel" placeholder="Mobile Number" pattern="[0-9]*"  [(ngModel)]="mobilenumber"></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <form novalidate (ngSubmit)="signup()" [formGroup]="signupform">\n  <div class="row">\n    <div class="lab">\n      <ion-icon name="ios-mail"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item>\n        <ion-input type="email" placeholder="E-Mail"  [(ngModel)]="mail" formControlName="mail" [class.error1]="!signupform.controls.mail.valid && signupform.controls.mail.dirty"></ion-input>\n      </ion-item>\n      <!-- <ion-item no-lines *ngIf="( signupform.get(\'mail\').hasError(\'minlength\') || signupform.get(\'mail\').hasError(\'pattern\') ||signupform.get(\'mail\').hasError(\'required\') ) && signupform.get(\'mail\').touched">\n        <div class="error" *ngIf="signupform.get(\'mail\').hasError(\'required\') && signupform.get(\'mail\').touched" >\n            Fill the Email\n        </div>\n        <div class="error" *ngIf="signupform.get(\'mail\').hasError(\'pattern\') && signupform.get(\'mail\').touched">\n            Email address invalid\n        </div>\n      </ion-item> -->\n    </div>\n  </div>\n  </form>\n\n  <div class="row">\n    <div class="lab">\n      <ion-icon name="ios-pin"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item>\n        <ion-input type="text" placeholder="City" [(ngModel)]="city"></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <div class="row">\n      <div class="lab">\n        <ion-icon name="ios-briefcase"></ion-icon>\n      </div>\n      <div class="inp">\n          <select-searchable\n          class="uplo"\n              item-content\n              placeholder = "Business Category"\n              [(ngModel)]="buisness"\n              [items]="buisnessdata"\n              itemValueField="id"\n              itemTextField="category"\n              [canSearch]="true">\n          </select-searchable>\n      </div>\n    </div>\n\n  <p class="label"> Type</p>\n  <div class="flex">\n    <ion-row class="radio-btn" radio-group [(ngModel)]="ctype">\n      <ion-col>\n        <ion-item>\n          <ion-label>JCI</ion-label>\n          <ion-radio value="1"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Non-JCI</ion-label>\n          <ion-radio value="2"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="comment">\n    <ion-item>\n      <ion-textarea placeholder="comments" [(ngModel)]="comment">\n      </ion-textarea>\n    </ion-item>\n  </div>\n\n\n  <div class="conf-btn">\n    <button ion-button (click)="confirm()">\n      Confirm\n    </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/guest/guest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], GuestPage);
    return GuestPage;
}());

//# sourceMappingURL=guest.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hshow_hshow__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShowcasePage = /** @class */ (function () {
    function ShowcasePage(navCtrl, navParams, storage, alertCtrl, http, toastController, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.mode_data = [];
        this.baseURI = "https://admin.jcombiz.com/jcom/";
    }
    ShowcasePage.prototype.ionViewDidLoad = function () {
        console.log('ShowcasePage');
        this.load();
    };
    ShowcasePage.prototype.load = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            // duration: 3000,
            spinner: 'dots'
        });
        loader.present();
        var 
        // body: string = "?m_id=" + m_id,
        url = this.baseURI + "get_mode.php";
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.mode_data = data;
            if (_this.mode_data != null) {
                loader.dismiss();
                console.log("full");
            }
            console.log("Profile data :", _this.mode_data);
        });
    };
    ShowcasePage.prototype.confirm = function () {
        var _this = this;
        console.log("date :", this.date);
        console.log("title :", this.title);
        console.log("mode :", this.mode);
        if (this.date == undefined || this.date == null) {
            var toast = this.toastController.create({
                message: 'Choose date',
                position: 'bottom',
                duration: 2000,
                closeButtonText: 'OK'
            });
            toast.present();
        }
        else if (this.title == undefined || this.title == null) {
            var toast = this.toastController.create({
                message: 'Enter Title',
                position: 'bottom',
                duration: 2000,
                closeButtonText: 'OK'
            });
            toast.present();
        }
        else if (this.mode == undefined || this.mode == null) {
            var toast = this.toastController.create({
                message: 'Choose mode',
                position: 'bottom',
                duration: 2000,
                closeButtonText: 'OK'
            });
            toast.present();
        }
        else {
            this.storage.get('jibmid').then(function (val) {
                var m_id = val;
                var loader = _this.loadingCtrl.create({
                    spinner: 'dots'
                });
                loader.present();
                var postdata = {
                    m_id: m_id,
                    date: _this.date,
                    title: _this.title,
                    mode: _this.mode
                }, url = _this.baseURI + "send_showcase.php";
                _this.http.post(url, postdata).map(function (res) { return res.json(); }).subscribe(function (data) {
                    if (data[0].status == "success") {
                        _this.toast();
                        loader.dismiss();
                    }
                    else {
                        alert("Failed");
                    }
                    console.log("Profile data :", _this.mode_data);
                });
                // let
                //   body: string = "?m_id=" + m_id + "&date=" + this.date + "&title=" + this.title + "&mode=" + this.mode,
                //   url: any = this.baseURI + "send_showcase.php" + body;
                // this.http.get(url).map(res => res.json()).subscribe(data => {
                //   if (data[0].status == "success") {
                //     loader.dismiss();
                //   }else{
                //     alert("Failed");
                //   }
                //   console.log("Profile data :", this.mode_data);
                // });
            });
        }
    };
    ShowcasePage.prototype.toast = function () {
        this.date = null;
        this.title = null;
        this.mode = null;
        var alert = this.alertCtrl.create({
            title: 'Success',
            buttons: ['OK']
        });
        alert.present();
    };
    ShowcasePage.prototype.hshow = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__hshow_hshow__["a" /* HshowPage */]);
    };
    ShowcasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-showcase',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/showcase/showcase.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Showcase</ion-title>\n    <div class="ic" (click)="hshow()">\n      <ion-icon name="list-box"></ion-icon>\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="rows">\n    <div class="lab">\n      <ion-icon name="ios-calendar"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item no-lines>\n        <!-- [readonly]=true -->\n        <!-- <ion-input type="date" placeholder="Date" [(ngModel)]="date"></ion-input> -->\n        <ion-datetime placeholder="Date" displayFormat="DD/M/YYYY" [(ngModel)]="date" min="1999" max="2025">\n        </ion-datetime>\n      </ion-item>\n    </div>\n  </div>\n\n  <div class="rows">\n    <div class="lab">\n      <ion-icon name="ios-paper"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item no-lines>\n        <!-- [readonly]=true -->\n        <ion-input type="text" placeholder="Title" [(ngModel)]="title"></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <div class="rows">\n    <div class="lab">\n      <ion-icon name="ios-paper"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item no-lines>\n        <ion-select [(ngModel)]="mode" placeholder="Mode">\n          <div *ngFor="let data of mode_data; let i = index">\n            <ion-option value="{{data.mode}}">{{data.mode}}</ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n    </div>\n  </div>\n\n  <div class="conf-btn" text-center>\n    <button ion-button block (click)="confirm()">\n      Save\n    </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/showcase/showcase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]])
    ], ShowcasePage);
    return ShowcasePage;
}());

//# sourceMappingURL=showcase.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ObjectsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ObjectsProvider = /** @class */ (function () {
    function ObjectsProvider(http) {
        this.http = http;
        this.pageName = "test";
        console.log('Hello ObjectsProvider Provider');
    }
    ObjectsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ObjectsProvider);
    return ObjectsProvider;
}());

//# sourceMappingURL=objects.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/qr-scanner/qr-scanner.module": [
		328,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HgnotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelgnote_modelgnote__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HgnotePage = /** @class */ (function () {
    function HgnotePage(navCtrl, navParams, modalCtrl, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.http = http;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.hgnotelist = [];
    }
    HgnotePage.prototype.ionViewDidLoad = function () {
        console.log('HgnotePage');
        this.load();
    };
    HgnotePage.prototype.modal = function (am, bc, com, ct) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modelgnote_modelgnote__["a" /* ModelgnotePage */], { data: am, data1: bc, data2: com, data3: ct }, { cssClass: 'inset-modal' })
            .present();
    };
    HgnotePage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id, url = _this.baseURI + "get_gnote_list.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.hgnotelist = data;
                console.log("Hgnotelist data :", _this.hgnotelist);
            });
        });
    };
    HgnotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hgnote',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/hgnote/hgnote.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> GNote History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor="let item of hgnotelist">\n\n    <ion-card (click)="modal(am?.value,bc?.value,com?.value,ct?.value)">\n      <div class="flex">\n        <div class="left">\n          <p>{{item.created_on}}</p>\n        </div>\n        <div class="center">\n          <P class="name">{{item.name}}</P>\n        </div>\n        <div class="right" *ngIf="item.type == 1">\n          <ion-icon class="rotate1" name="arrow-up"></ion-icon>\n        </div>\n        <div class="right" *ngIf="item.type == 2">\n          <ion-icon class="rotate2" name="arrow-up"></ion-icon>\n        </div>\n      </div>\n\n      <ion-textarea style="display: none;" value="{{item.amount}}" #am></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.business_category}}" #bc></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.comments}}" #com></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.connect_type}}" #ct></ion-textarea>\n\n    </ion-card>\n\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/hgnote/hgnote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], HgnotePage);
    return HgnotePage;
}());

//# sourceMappingURL=hgnote.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelgnotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModelgnotePage = /** @class */ (function () {
    function ModelgnotePage(navCtrl, viewCtrl, params) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.am = this.params.get("data");
        this.bc = this.params.get("data1");
        this.com = this.params.get("data2");
        this.ct = this.params.get("data3");
    }
    ModelgnotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModelgnotePage');
    };
    ModelgnotePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModelgnotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modelgnote',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/modelgnote/modelgnote.html"*/'<ion-content>\n\n  <div class="connect">\n    <hr>\n    <div class="row">\n      <p class="left">Amount  </p>\n      <p class="right">{{am}}</p>\n    </div>\n    <hr>\n\n    <div class="row">\n      <p class="left">Connect Type  </p>\n      <p class="right">{{ct}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Business Category  </p>\n      <p class="right">{{bc}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Comment  </p>\n      <p class="right">{{com}}</p>\n    </div>\n    <hr>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <button ion-button full (click)="dismiss()">Close\n  </button>\n</ion-footer>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/modelgnote/modelgnote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ModelgnotePage);
    return ModelgnotePage;
}());

//# sourceMappingURL=modelgnote.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelconnectmemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModelconnectmemberPage = /** @class */ (function () {
    // connect_name: string;
    function ModelconnectmemberPage(navCtrl, viewCtrl, loadingController, toastController, alertCtrl, http, storage, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.storage = storage;
        this.navParams = navParams;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        // connect_id: string;
        this.data = null;
        this.to_id = this.navParams.get("data");
        console.log("Member Id 2:", this.to_id);
    }
    ModelconnectmemberPage.prototype.ionViewDidLoad = function () {
        console.log('Model connect Member Page');
        this.load();
    };
    ModelconnectmemberPage.prototype.dismiss = function () {
        if (this.data != null) {
            this.viewCtrl.dismiss(this.data);
            console.log("data:", this.data);
        }
        else {
            var toast = this.toastController.create({
                message: 'Please Select Any Connect Member',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
    };
    ModelconnectmemberPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModelconnectmemberPage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id + "&to_member_id=" + _this.to_id, type = "application/x-www-form-urlencoded; charset=UTF-8", 
            // headers: any = new Headers({ 'Content-Type': type }),
            url = _this.baseURI + "get_connect_member.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.connectlist = data;
                console.log("Connect Member Data : ", _this.connectlist);
            });
        });
    };
    ModelconnectmemberPage.prototype.onChangeHandler = function (event) {
        console.log("select event", event);
        this.data = event;
        // this.connect_id = data;
        console.log("split :", this.data);
        // this.connect_id = this.data[0];
        // this.connect_name = this.data[1];
    };
    ModelconnectmemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modelconnectmember',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/gnote/modelconnectmember/modelconnectmember.html"*/'<!-- <ion-header>\n\n    <ion-navbar>\n      <ion-title>Connect Member</ion-title>\n    </ion-navbar>\n\n  </ion-header> -->\n\n\n<ion-content padding>\n\n  <div style="text-align: center;margin-bottom: 15px;">\n    Choose The Connect\n  </div>\n\n\n  <ion-list radio-group (ionChange)="onChangeHandler($event)">\n\n\n    <!-- <div *ngFor="let item of connectlist">\n\n      <div class="flex">\n\n        <div class="right">\n          <ion-radio [value]="item"></ion-radio>\n        </div>\n\n        <div class="left">\n          <div class="third">\n            <ion-label>{{item.connect_name}}</ion-label>\n            <span>\n              <ion-label>{{item.created_on}}</ion-label>\n            </span>\n          </div>\n          <ion-label>{{item.comments}}</ion-label>\n        </div>\n\n      </div>\n    </div> -->\n\n    <ion-item style="background-color: white;" *ngFor="let item of connectlist">\n      <ion-radio item-start [value]="item"></ion-radio>\n      <ion-label style="color: black;">{{item.connect_name}}</ion-label>\n      <h4 item-end>{{item.created_on}}</h4>\n    </ion-item>\n \n\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n\n\n  <div class="alg">\n    <div class="btn-left">\n      <button ion-button (click)="dismiss()">OK</button>\n    </div>\n    <div class="btn-right">\n      <button ion-button (click)="close()">Close</button>\n    </div>\n  </div>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/gnote/modelconnectmember/modelconnectmember.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ModelconnectmemberPage);
    return ModelconnectmemberPage;
}());

//# sourceMappingURL=modelconnectmember.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HconnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelconnect_modelconnect__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HconnectPage = /** @class */ (function () {
    function HconnectPage(navCtrl, navParams, modalCtrl, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.http = http;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.hconnectlist = [];
    }
    HconnectPage.prototype.ionViewDidLoad = function () {
        console.log('HconnectPage');
        this.load();
    };
    HconnectPage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id, url = _this.baseURI + "get_connect_list.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.hconnectlist = data;
                console.log("Hconnect data :", _this.hconnectlist);
            });
        });
    };
    HconnectPage.prototype.modal = function (ab, ad, bc, com, cn, cs, ct, em, mn, mt, tn) {
        console.log("Types:", mt, tn, ab);
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modelconnect_modelconnect__["a" /* ModelconnectPage */], { data: ab, data1: ad, data2: bc, data3: com, data4: cn, data5: cs, data6: ct, data7: em, data8: mn,
            data9: mt, data10: tn }, { cssClass: 'inset-modal' })
            .present();
    };
    HconnectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hconnect',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/hconnect/hconnect.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Connect History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor="let item of hconnectlist">\n\n    <ion-card (click)="modal(ab?.value,ad?.value,bc?.value,com?.value,cn?.value,cs?.value,ct?.value,em?.value,mn?.value,mt?.value,tn?.value)">\n\n      <div class="flex">\n\n        <div class="left">\n          <p>{{item.created_on}}</p>\n        </div>\n\n        <div class="center">\n          <P class="name">{{item.name}}</P>\n        </div>\n\n        <div class="right" *ngIf="item.type == 1">\n          <ion-icon class="rotate1" name="arrow-up"></ion-icon>\n        </div>\n        <div class="right" *ngIf="item.type == 2">\n            <ion-icon class="rotate2" name="arrow-up"></ion-icon>\n          </div>\n\n      </div>\n\n      <ion-textarea style="display: none;" value="{{item.about_connect}}" #ab></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.address}}" #ad></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.business_category}}" #bc></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.comments}}" #com></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.connect_name}}" #cn></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.connect_status}}" #cs></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.connect_type}}" #ct></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.email_id}}" #em></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.mobile_no}}" #mn></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.meeting_type}}" #mt></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.table_name}}" #tn></ion-textarea>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/hconnect/hconnect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], HconnectPage);
    return HconnectPage;
}());

//# sourceMappingURL=hconnect.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PconnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelconnect_modelconnect__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PconnectPage = /** @class */ (function () {
    function PconnectPage(navCtrl, navParams, modalCtrl, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.http = http;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.hconnectlist = [];
    }
    PconnectPage.prototype.ionViewDidLoad = function () {
        console.log('HconnectPage');
        this.load();
    };
    PconnectPage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id, url = _this.baseURI + "get_pending_connect.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.hconnectlist = data;
                console.log("Hconnect data :", _this.hconnectlist);
            });
        });
    };
    PconnectPage.prototype.modal = function (ab, ad, bc, com, cn, cs, ct, em, mn, mt, tn, t, ci) {
        var _this = this;
        console.log("Types:", mt, tn, ab);
        var model = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modelconnect_modelconnect__["a" /* ModelconnectPage */], { data: ab, data1: ad, data2: bc, data3: com, data4: cn, data5: cs, data6: ct, data7: em, data8: mn,
            data9: mt, data10: tn, data11: t, data12: ci }, { cssClass: 'inset-modal' });
        model.onDidDismiss(function (data) {
            console.log(data);
            if (data == true) {
                _this.load();
            }
        });
        model.present();
    };
    PconnectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pconnect',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/pconnect/pconnect.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Connect Pending History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor="let item of hconnectlist">\n\n    <ion-card (click)="modal(ab?.value,ad?.value,bc?.value,com?.value,cn?.value,cs?.value,ct?.value,em?.value,mn?.value,mt?.value,tn?.value,t?.value,ci?.value)">\n\n      <div class="flex">\n\n        <div class="left">\n          <p>{{item.created_on}}</p>\n        </div>\n\n        <div class="center">\n          <P class="name">{{item.name}}</P>\n        </div>\n\n        <div class="right" *ngIf="item.type == 1">\n          <ion-icon class="rotate1" name="arrow-up"></ion-icon>\n        </div>\n        <div class="right" *ngIf="item.type == 2">\n            <ion-icon class="rotate2" name="arrow-up"></ion-icon>\n          </div>\n\n      </div>\n\n      <ion-textarea style="display: none;" value="{{item.about_connect}}" #ab></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.address}}" #ad></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.business_category}}" #bc></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.comments}}" #com></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.connect_name}}" #cn></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.connect_status}}" #cs></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.connect_type}}" #ct></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.email_id}}" #em></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.mobile_no}}" #mn></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.meeting_type}}" #mt></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.table_name}}" #tn></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.type}}" #t></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.connect_id}}" #ci></ion-textarea>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/pconnect/pconnect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], PconnectPage);
    return PconnectPage;
}());

//# sourceMappingURL=pconnect.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelyou_modelyou__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HyouPage = /** @class */ (function () {
    function HyouPage(navCtrl, navParams, modalCtrl, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.http = http;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.hyoumelist = [];
    }
    HyouPage.prototype.ionViewDidLoad = function () {
        console.log('HyouPage');
        this.load();
    };
    HyouPage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id, url = _this.baseURI + "get_youandme_list.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.hyoumelist = data;
                console.log("Hgnotelist data :", _this.hyoumelist);
            });
        });
    };
    HyouPage.prototype.modal = function (plc, com) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modelyou_modelyou__["a" /* ModelyouPage */], { data: plc, data1: com }, { cssClass: 'inset-modal' })
            .present();
    };
    HyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hyou',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/hyou/hyou.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> You & Me History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor="let item of hyoumelist">\n\n    <ion-card (click)="modal(plc?.value,com?.value)">\n      <div class="flex">\n        <div class="left">\n          <p>{{item.date}}</p>\n        </div>\n        <div class="center">\n          <P class="name">{{item.name}}</P>\n        </div>\n        <div class="right" *ngIf="item.type == 1">\n            <ion-icon class="rotate1" name="arrow-up"></ion-icon>\n          </div>\n          <div class="right" *ngIf="item.type == 2">\n            <ion-icon class="rotate2" name="arrow-up"></ion-icon>\n          </div>\n      </div>\n\n      <ion-textarea style="display: none;" value="{{item.place}}" #plc></ion-textarea>\n      <ion-textarea style="display: none;" value="{{item.comments}}" #com></ion-textarea>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/hyou/hyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], HyouPage);
    return HyouPage;
}());

//# sourceMappingURL=hyou.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModelyouPage = /** @class */ (function () {
    function ModelyouPage(navCtrl, viewCtrl, params) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.myParam = params.get('myParam');
        this.place = this.params.get("data");
        this.comm = this.params.get("data1");
    }
    ModelyouPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModelyouPage');
    };
    ModelyouPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModelyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modelyou',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/modelyou/modelyou.html"*/'<ion-content>\n  <div class="connect">\n    <!-- <div class="row">\n      <p class="left">Choose : </p>\n      <p class="right">Any</p>\n    </div> -->\n    <!-- <hr> -->\n    <div class="row">\n      <p class="left">Place  </p>\n      <p class="right">{{place}}</p>\n    </div>\n    <hr>\n    <!-- <div class="row">\n      <p class="left"> Date : </p>\n      <p class="right">12.12.12</p>\n    </div>\n    <hr> -->\n    <div class="row">\n      <p class="left"> Comment  </p>\n      <p class="right">{{comm}}</p>\n    </div>\n    <hr>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <button ion-button full (click)="dismiss()">Close\n  </button>\n</ion-footer>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/modelyou/modelyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ModelyouPage);
    return ModelyouPage;
}());

//# sourceMappingURL=modelyou.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilemodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilemodalPage = /** @class */ (function () {
    function ProfilemodalPage(navCtrl, navParams, loadingCtrl, toastController, http, storage, viewCtrl, params) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.http = http;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
    }
    ProfilemodalPage.prototype.ionViewDidLoad = function () {
        console.log(' profilemodalPage');
        this.load();
    };
    ProfilemodalPage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id, url = _this.baseURI + "get_member_details.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                // this.profiledata = data;
                _this.address = data[0].address;
                _this.info = data[0].business_info;
                _this.keyword = data[0].business_keywords;
                _this.product = data[0].products;
            });
        });
    };
    ProfilemodalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProfilemodalPage.prototype.save = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            console.log("address :", _this.address);
            console.log("info :", _this.info);
            console.log("keyword :", _this.keyword);
            console.log("product :", _this.product);
            var loading = _this.loadingCtrl.create({});
            loading.present();
            var body = "?m_id=" + m_id + "&address=" + _this.address + "&business_info=" + _this.info + "&business_keywords=" + _this.keyword + "&products=" + _this.product, url = _this.baseURI + "send_member_details.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log("Result :", data);
                if (data[0].status == "success") {
                    _this.toast();
                    loading.dismiss();
                }
            });
        });
    };
    ProfilemodalPage.prototype.toast = function () {
        var toast = this.toastController.create({
            message: 'Success',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'OK'
        });
        toast.present();
    };
    ProfilemodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profilemodal',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/profile/profilemodal/profilemodal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="overlap" >\n\n\n    <p class="labl">Address</p>\n    <ion-card class="txt-ar">\n      <ion-item>\n        <ion-textarea placeholder="Type Your Address" [(ngModel)] = "address" >\n        </ion-textarea>\n      </ion-item>\n    </ion-card>\n\n    <p class="labl">Business Information</p>\n    <ion-card class="txt-ar">\n      <ion-item>\n        <ion-textarea placeholder="Type Your Business Information" [(ngModel)] = "info" >\n        </ion-textarea>\n      </ion-item>\n    </ion-card>\n\n    <p class="labl">Business Keywords</p>\n    <ion-card class="txt-ar">\n      <ion-item>\n        <ion-textarea placeholder="Type Your Business Keywords" [(ngModel)] = "keyword" >\n        </ion-textarea>\n      </ion-item>\n    </ion-card>\n\n    <p class="labl">Products</p>\n    <ion-card class="txt-ar">\n      <ion-item>\n        <ion-textarea placeholder="Type Your Business Product" [(ngModel)] = "product" >\n        </ion-textarea>\n      </ion-item>\n    </ion-card>\n\n  </div>\n\n  <div class="conf-btn">\n      <button ion-button (click)="save()">\n        Save\n      </button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/profile/profilemodal/profilemodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ProfilemodalPage);
    return ProfilemodalPage;
}());

//# sourceMappingURL=profilemodal.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, toastController, loadingController, http, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.member = false;
        this.memberId = "-";
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.show_zone = false;
        this.show_LOM = false;
        this.show_table = false;
        this.show_meeting_table = false;
        this.disable_register = true;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.acceptTerms = false;
        this.tableLength = true;
        this.load();
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FieldsPage');
    };
    RegisterPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    RegisterPage.prototype.load = function () {
        var _this = this;
        var loading = this.loadingController.create({});
        loading.present();
        var type = "application/x-www-form-urlencoded; charset=UTF-8", url = this.baseURI + "get_zone.php";
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("get_zone data :", data);
            _this.country = data;
            // loading.dismiss();
        });
        var type1 = "application/x-www-form-urlencoded; charset=UTF-8", url1 = this.baseURI + "get_meeting_type.php";
        this.http.get(url1).map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log("get_zone data :", data1);
            _this.meeting_type = data1;
            loading.dismiss();
        });
    };
    RegisterPage.prototype.getZone = function (val) {
        console.log("getZone val :", val);
        this.show_zone = true;
        for (var i = 0; i < this.country.length; i++) {
            if (this.country[i].country == val) {
                this.zone = this.country[i].zone_details;
            }
        }
    };
    RegisterPage.prototype.getLOM = function (val) {
        var _this = this;
        console.log("getLOM val :", val);
        this.show_LOM = true;
        this.show_meeting_table = true;
        var loading = this.loadingController.create({});
        loading.present();
        var body = "?zone=" + val, type = "application/x-www-form-urlencoded; charset=UTF-8", url = this.baseURI + "get_lom.php" + body;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("get_lom data :", data);
            _this.lom = data;
            loading.dismiss();
        });
    };
    RegisterPage.prototype.getTable = function (val) {
        var _this = this;
        console.log("getTable val :", val);
        console.log("getTable zoneName :", this.zoneName);
        if (this.lom != null) {
            this.show_table = true;
            var loading_1 = this.loadingController.create({});
            loading_1.present();
            var body = "?zone=" + this.zoneName + "&meeting_type=" + val, type = "application/x-www-form-urlencoded; charset=UTF-8", url = this.baseURI + "get_table.php" + body;
            this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log("get_table data :", data);
                _this.table = data;
                console.log("length:", _this.table);
                if (_this.table == null) {
                    _this.tableLength = false;
                }
                else {
                    _this.tableLength = true;
                }
                console.log(_this.tableLength);
                loading_1.dismiss();
            });
        }
    };
    RegisterPage.prototype.tableEmpty = function () {
        var alert = this.alertCtrl.create({
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
    };
    RegisterPage.prototype.getBusiness = function (val) {
        var _this = this;
        var loading = this.loadingController.create({});
        loading.present();
        var body = "?table=" + val, type = "application/x-www-form-urlencoded; charset=UTF-8", url = this.baseURI + "get_bc.php" + body;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("get_bc data :", data);
            _this.business = data;
            loading.dismiss();
        });
    };
    RegisterPage.prototype.businessCheck = function (val) {
        console.log("businessCheck :", val);
        // for (var i = 0; i < this.business.length; i++) {
        //   if (this.business[i].id == val) {
        //       console.log("this.business[i].count :",this.business[i].count);
        if (val.count != "0") {
            console.log("Selected Business Category is Occupied by another Partner,Please Choose different Business Category / Table");
            var toast = this.toastController.create({
                message: 'Selected Business Category is Occupied by another Partner,Please Choose different Business Category / Table',
                position: 'bottom',
                duration: 5000
            });
            toast.present();
            this.disable_register = true;
        }
        else {
            console.log("Business ok");
            this.disable_register = false;
        }
        //   }
        // }
    };
    RegisterPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.show_member_id = function (val) {
        if (val == "1") {
            this.member = true;
        }
        else {
            this.member = false;
        }
    };
    RegisterPage.prototype.register = function () {
        if (this.userName == null) {
            var toast = this.toastController.create({
                message: 'Fill the Name',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.mobile == null) {
            var toast = this.toastController.create({
                message: 'Fill the Mobile Number',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.eMail == null) {
            var toast = this.toastController.create({
                message: 'Fill the Email',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.password == null) {
            var toast = this.toastController.create({
                message: 'Fill the Password',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.countryName == null) {
            var toast = this.toastController.create({
                message: 'Choose Country',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.zoneName == null) {
            var toast = this.toastController.create({
                message: 'Choose Zone',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.lomName == null) {
            var toast = this.toastController.create({
                message: 'Choose LOM',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.meetingType == null) {
            var toast = this.toastController.create({
                message: 'Choose Meeting Type',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.tableName == null) {
            var toast = this.toastController.create({
                message: 'Choose Table',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.businessName == null) {
            var toast = this.toastController.create({
                message: 'Choose Business Category',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else {
            // console.log("OK")
            if (this.member == true) {
                if (this.memberId == null) {
                    var toast = this.toastController.create({
                        message: 'Fill Member ID',
                        position: 'bottom',
                        duration: 2000
                    });
                    toast.present();
                }
                else {
                    console.log("OK");
                    // this.signup();
                    this.pay();
                }
            }
            else {
                console.log("OK");
                // this.signup();
                this.pay();
            }
        }
    };
    RegisterPage.prototype.signup = function (payment_id_val) {
        var _this = this;
        var loading = this.loadingController.create({});
        loading.present();
        var body = "?name=" + this.userName + "&mobile_no=" + this.mobile + "&email_id=" + this.eMail + "&password=" + this.password + "&country=" + this.countryName + "&zone=" + this.zoneName + "&lom=" + this.lomName.lom_name + "&membership_id=" + this.memberId + "&table=" + this.tableName + "&business_category=" + this.businessName.id + "&payment_id=" + payment_id_val + "&meeting_type=" + this.meetingType, type = "application/x-www-form-urlencoded; charset=UTF-8", url = this.baseURI + "get_signup.php" + body;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("get_signup data :", data);
            if (data[0].status == "1") {
                var toast = _this.toastController.create({
                    message: data[0].message,
                    position: 'bottom',
                    duration: 2000
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
            else {
                console.log("Signup status");
            }
            loading.dismiss();
        });
    };
    // pay(){
    //   console.log("Payment Method Will Be Added Soon!");
    // }
    RegisterPage.prototype.pay = function () {
        var _this = this;
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
                ondismiss: function () {
                    alert('Closed');
                }
            }
        };
        var successCallback = function (payment_id) {
            // alert('payment_id: ' + payment_id);
            var toast = _this.toastController.create({
                message: "Paymet Success",
                position: 'bottom',
                duration: 2000
            });
            toast.present();
            _this.signup(payment_id);
            //Navigate to another page using the nav controller
            //this.navCtrl.setRoot(SuccessPage)
            //Inject the necessary controller to the constructor
        };
        var cancelCallback = function (error) {
            console.log({ error: error });
            var str = error.description;
            var str_array = str.split(',');
            for (var i = 0; i < str_array.length; i++) {
                // Trim the excess whitespace.
                str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
                // Add additional code here, such as:
                if (str_array[i].includes("description")) {
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
    };
    RegisterPage.prototype.loadlom = function (ev) {
        console.log("Lom:", this.lomName, ev);
    };
    RegisterPage.prototype.updateCucumber = function () {
        console.log('Cucumbers new state:' + this.acceptTerms);
    };
    RegisterPage.prototype.openMod = function (ev) {
        console.log("Terms Model");
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__terms_terms__["a" /* TermsPage */]);
        profileModal.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/register/register.html"*/'<ion-content padding>\n\n  <div class="center-div" text-center>\n    <img src="assets/imgs/jcom_logo.png" class="logo_img">\n\n    <ion-list margin-bottom>\n\n      <!-- // Name // -->\n      <ion-item>\n        <ion-label>\n          <ion-icon name="ios-person"></ion-icon>\n        </ion-label>\n        <ion-input type="text" placeholder="Name" [(ngModel)]="userName">\n        </ion-input>\n      </ion-item>\n\n      <!-- // Mobile Number // -->\n      <ion-item>\n        <ion-label>\n          <ion-icon name="ios-call"></ion-icon>\n        </ion-label>\n        <ion-input type="tel" placeholder="Mobile Number" [(ngModel)]="mobile" pattern="[0-9]*" maxlength="10">\n        </ion-input>\n      </ion-item>\n\n\n      <!-- // Email // -->\n      <ion-item>\n        <ion-label>\n          <ion-icon name="ios-mail"></ion-icon>\n        </ion-label>\n        <ion-input type="email" placeholder="Email Id" [(ngModel)]="eMail"\n          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"></ion-input>\n      </ion-item>\n\n\n      <!-- // Password // -->\n      <ion-item>\n        <ion-label>\n          <ion-icon name="ios-lock"></ion-icon>\n        </ion-label>\n        <ion-input [type]="passwordType" placeholder="Password" [(ngModel)]="password"></ion-input>\n        <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (click)=\'hideShowPassword()\'></ion-icon>\n      </ion-item>\n\n      <!-- // Country // -->\n      <ion-list class="dummy">\n        <div class="rows">\n          <div class="lab">\n            <ion-icon name="ios-globe"></ion-icon>\n          </div>\n          <div class="inp">\n            <ion-select placeholder="Select Country" [(ngModel)]="countryName" (ionChange)="getZone(countryName)">\n              <div *ngFor="let data of country">\n                <ion-option value="{{data.country}}">{{data.country_name}}</ion-option>\n              </div>\n            </ion-select>\n          </div>\n        </div>\n      </ion-list>\n\n      <!-- // Zone // -->\n      <ion-list *ngIf="show_zone" class="dummy">\n        <div class="rows">\n          <div class="lab">\n            <ion-icon name="ios-locate"></ion-icon>\n          </div>\n          <div class="inp">\n            <ion-select placeholder="Select Zone" [(ngModel)]="zoneName" (ionChange)="getLOM(zoneName)">\n              <div *ngFor="let data of zone;let i = index">\n                <ion-option value="{{data.zone}}">{{data.zone_name}}</ion-option>\n              </div>\n            </ion-select>\n          </div>\n        </div>\n      </ion-list>\n\n      <!-- LOM -->\n      <ion-list *ngIf="show_LOM" class="dummy">\n        <div class="rows">\n          <div class="lab">\n            <ion-icon name="ios-people"></ion-icon>\n          </div>\n          <div class="inp">\n            <select-searchable item-content placeholder="Select LOM " [(ngModel)]="lomName" [items]="lom"\n              itemValueField="lom" itemTextField="lom_name" (onChange)="loadlom($event)" [canSearch]="true">\n            </select-searchable>\n          </div>\n        </div>\n      </ion-list>\n\n\n    </ion-list>\n\n    <!-- // Member ID // -->\n    <ion-list margin-bottom radio-group class="center-list">\n\n      <ion-row style="position: relative;">\n        <ion-col col-6 class="center">\n          <h6 class="no-bg">JCI Membership ID</h6>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item class="no-bg" no-lines>\n            <ion-radio (click)="show_member_id(1)" style="radio-ios-icon-border-style: 3px solid #fff;"></ion-radio>\n            <ion-label>Yes</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item class="no-bg" no-lines>\n            <ion-radio (click)="show_member_id(0)"></ion-radio>\n            <ion-label>No</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-list *ngIf="member">\n        <div class="rows">\n          <div class="lab">\n            <ion-icon name="ios-contact"></ion-icon>\n          </div>\n          <div class="inp">\n            <ion-input type="number" style="margin: 0 0 0 17px;" placeholder="Membership ID" [(ngModel)]="memberId"></ion-input>\n          </div>\n        </div>\n      </ion-list>\n\n      <ion-list *ngIf="show_meeting_table" margin-bottom class="dummy">\n        <div class="rows">\n          <div class="lab">\n            <ion-icon name="ios-contacts"></ion-icon>\n          </div>\n          <div class="inp">\n            <ion-select placeholder="Meeting Type" [(ngModel)]="meetingType" (ionChange)="getTable(meetingType)">\n              <div *ngFor="let data of meeting_type">\n                <ion-option value="{{data.meeting_type}}">{{data.meeting_type_name}}</ion-option>\n              </div>\n            </ion-select>\n          </div>\n        </div>\n      </ion-list>\n\n      <ion-list margin-bottom class="dummy">\n\n        <!-- // table // -->\n        <ion-list *ngIf="show_table" >\n          <div class="rows">\n            <div class="lab">\n              <ion-icon name="ios-calendar"></ion-icon>\n            </div>\n            <div class="inp" *ngIf="tableLength">\n              <ion-select placeholder="Select Table" [(ngModel)]="tableName" (ionChange)="getBusiness(tableName)">\n                <div *ngFor="let data of table;let i = index">\n                  <ion-option value="{{data.table}}">{{data.table_name}}</ion-option>\n                </div>\n              </ion-select>\n            </div>\n            <div class="inp2" *ngIf="!tableLength" (click)="tableEmpty()">\n              <h6 style="font-size: 1.4rem;\n              padding-top: 16px;\n              padding-left: 7px;">Select Table</h6>\n            </div>\n          </div>\n        </ion-list>\n\n        <!-- // Business Category // -->\n        <!-- <ion-item>\n        <ion-label>\n          <ion-icon name="ios-briefcase"></ion-icon>\n        </ion-label>\n        //<ion-select placeholder="Select Business Category" [(ngModel)]="businessName" (ionChange)="businessCheck(businessName)">\n        //    <div *ngFor="let data of business;let i = index">\n        //      <ion-option value="{{data.id}}">{{data.category}}</ion-option>\n        //    </div>\n          </ion-select>\n        <select-searchable class="uplo" item-content placeholder="Business Category" [(ngModel)]="businessName"\n          [items]="business" itemValueField="id" itemTextField="category" [canSearch]="true" (onChange)="businessCheck(businessName)">\n        </select-searchable>\n      </ion-item> -->\n        <ion-list class="dummy">\n          <div class="rows">\n            <div class="lab">\n              <ion-icon name="ios-briefcase"></ion-icon>\n            </div>\n            <div class="inp">\n              <select-searchable class="" item-content placeholder="Business Category" [(ngModel)]="businessName"\n                [items]="business" itemValueField="id" itemTextField="category" [canSearch]="true"\n                (onChange)="businessCheck(businessName)">\n              </select-searchable>\n            </div>\n          </div>\n        </ion-list>\n\n\n      </ion-list>\n\n      <div class="termsDiv">\n\n        <div class="checkBox">\n          <ion-checkbox (ionChange)="updateCucumber()" [(ngModel)]="acceptTerms"></ion-checkbox>\n        </div>\n        <div class="terms">\n          <p>Accept Our <a (click)="openMod($event)">Terms And Conditions</a></p>\n        </div>\n\n        <!-- <ion-item> -->\n        <!-- </ion-item> -->\n      </div>\n\n      <div class="login-button">\n        <button ion-button type="submit" (click)="register()" [disabled]="disable_register">Register Now</button>\n        <!-- (click)="register()" [disabled]="disable_register" -->\n        <!-- (click)="pay()" -->\n      </div>\n\n      <!-- </div> -->\n\n\n\n      <p class="nav">Already have an account?</p>\n      <!-- <b (click)="login()">Signin Here</b> -->\n\n      <div class="login-button">\n        <button ion-button (click)="login()">Signin Here</button>\n      </div>\n      <!-- </ion-list> -->\n      <!-- </div> -->\n    </ion-list>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/terms/terms.html"*/'<ion-header>\n\n  <ion-navbar  >\n\n    \n      <ion-title style="width: 100%;">Terms and Conditions</ion-title>\n      <!-- <ion-icon style="color: white;" name="close" (click)="close()"></ion-icon> -->\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3>JCOM</h3>\n  <p>\n    Building trusted relationships is critical to business success. The purpose of Business Networking through JCOM\n    (Jaycees Chamber of Commerce) is to provide a platform to JCI India members to meet the other business owners,\n    potential suppliers, or other experienced business professionals, to help you grow your business with the help of\n    the network of Junior Chamber International. Networking gives you a pool of experts who go from the competition to\n    the customers and allows you to offer them something, hopefully in exchange for their services, advice, knowledge,\n    or contacts.\n    Basically, JCOM operate on the philosophy of giving people will benefit. This means the more referrals you give to\n    fellow members, the more referrals will be given back to you. The JCOM Membership is designed to develop\n    long-lasting relationships that deepen and evolve through their core value – giving people will benefit. In JCOM,\n    each member of the referral network contributes to the success.\n  </p>\n  <h3>The mobile application of JCOM</h3>\n  <p>\n    This TOU govern your access to and use of JCOM’s services available via the JCOM Mobile, once you become enrolled as\n    the member of JCOM. The Mobile App includes SMS, email notifications, applications, buttons, widgets, ads, commerce\n    services, and any other related services that can be accessed via our Site or that link to these TOU (collectively,\n    the “Services“), and any information, text, links, graphics, photos, videos, or other materials or templates of\n    materials uploaded, downloaded or appearing on the Services (collectively referred to as “Content“).\n    By using the JCOM Mobile Application and Services you agree to be bound by these TOU. The Mobile App, their past,\n    present and future versions; all web pages found within the Web Sites; the materials and information on the Web\n    Sites, including, without limitation, organization, graphics, text, images, audio, videos, designs, compilations,\n    advertising copy, and the trademarks, logos, domain names, trade names, service marks and trade identities;\n    any and all copyrightable material (including source and object code); and all other materials related to the Web\n    Sites, including without limitation, (collectively, the “Materials”) are provided by JCOM. By using the Web Site and\n    mobile application, you represent that: (i) you have the capacity to be bound by these TOU or, if you are a minor,\n    your parent or legal guardian has read and agreed to these TOU on your behalf; (ii) all information you provide to\n    JCOM is true, accurate, complete and current; (iii) you hold and will continue to hold all rights necessary to enter\n    into and fully perform your obligations under these TOU and to grant the rights granted under these TOU;\n  </p>\n  <h3>Who Can be the members</h3>\n  <p>\n    Individuals who are either active or associate or Alumni members of JCI India can only become a member of JCOM,\n    provided he / she have paid the subscription charges of JCOM <br> <br>\n    Individuals who are either active or associate or Alumni members of JCI India can only become a member of JCOM,\n    provided he / she have paid the subscription charges of JCOM\n  </p>\n  <h3>Membership subscription and other payments.</h3>\n  <p>The membership subscription of JCOM will be decided by JCI India from time to time, at its National Governing Board\n    meeting / JCOM Board. The other charges including the meeting fees and other payments with regard to each table will\n    be decided by the JCOM Table\n    a) Online Services:-\n    When you seek an online service, the online payment options will be sent to you. Those prices, availability, and\n    other purchase terms are subject to change. JCOM reserves the right without prior notice to discontinue or change\n    specifications and prices on services offered on and outside of the jcombiz.com without incurring any obligation to\n    you.\n    b) All fees may be subject to taxes.\n    c) Purchases of other products and services through the jcombiz.com may be subject to other terms and conditions\n    that are presented to you at the time of purchase.</p>\n\n  <h3>Refund Policy</h3>\n  <p>\n    Our refund policy acknowledges that subject to applicable membership policies of JCOM, if the payment is already\n    done by you, and if your desired services are not delivered, JCOM will refund any payment you made for the service\n    that has not been delivered. Any decision on refund is sole discretion of the JCOM Board, if any dispute arise upon\n    any matter\n  </p>\n\n  <h3>Privacy Policy.</h3>\n  <p>\n    You acknowledge that JCOM may access, preserve and disclose your information if required to do so by law or in a\n    good faith belief that such access preservation or disclosure is reasonably necessary to: (a) comply with legal\n    process;\n    (b) enforce the provisions of this TOU;\n    (c) respond to claims that any content violates the rights of third parties;\n    (d) respond to your requests for customer service; or\n    (e) protect the rights, property or personal safety of JCOM, its users and the public.\n    Our Privacy Policy, describes how we collect, process, store and share the information you provide to us when you\n    use jcombiz.com and Services. You acknowledge that through your use of the Services, your personal data will be\n    collected and used (as set forth in the Privacy Policy), including the transfer of your data to the servers kept at\n    Amazon Web Services, and/or other countries for storage, processing and use by JCOM.\n  </p>\n\n  <h3>Content of the Services.</h3>\n  <p>\n    You are responsible for your use of the JCOM Site and Services and for any Content you provide, including compliance with applicable laws, rules, and regulations. Before accepting or joining any content published via the Internet, you must consider the source of the Content or materials before using or relying upon it.\nJCOM is an intellectual property owner and understands the costs and expenses in developing and maintaining intellectual property. JCOM also respects the intellectual property rights of others and expects its users of the JCOM Site and Services to do the same. We reserve the right to remove Content alleged to be infringing without prior notice, at our sole discretion, and without liability to you.\nUsers of the Services will operate in a lawful, ethical and professional manner. Users shall conduct themselves in a fair, responsible and business-like manner at all times and will avoid any discourteous, deceptive, misleading or unethical practices. You are solely responsible for any comments or posts you leave on our Site, blogs or any JCOM site. JCOM does not control content posted and does not guarantee the accuracy, integrity or quality of the content. In using the Site or the Services you may be exposed to content that you may find offensive, indecent or objectionable. Under no circumstances will JCOM be liable in any way for any content, including but not limited to any errors or omissions in any content or any loss or damage of any kind incurred as a result of the use of any content posted or otherwise made available via the Site or the Services.\nAll kind of illegal mis use of the website jcombiz.com and the online content of JCOM, including spamming is strictly prohibited by JCOM and will result in the immediate termination of your account. Such practices may also be illegal under applicable laws and may subject you to civil or criminal penalties.\nYour use of software made available via jcombiz.com is subject to any applicable license agreement or user agreement or the documentation that accompanies or is included with the software (“License Terms“).\nJCOM has the right (but not the obligation) in its sole discretion to screen, refuse, move or remove any content that violates the TOU or is otherwise objectionable.\nYou bear all risks associated with the use of any content on the jcombiz.com or in connection with the Services including any reliance on the accuracy, completeness, or usefulness of such content. The Services and software embodied within the Service may include security components that permit digital materials to be protected. The use of these materials is subject to usage rules set by JCOM and/or its technology providers. You may not attempt to override or circumvent any of the usage rules embedded in the Services.\n  </p>\n\n  <h3>General Use of the Service – Permissions and Restrictions –</h3>\n  <p>\n    JCOM ” hereby grants you permission to access and use the Service as set forth in these Terms of Service, provided that You agree not to distribute in any medium any part of the Service or the Content without JOM ‘s prior written authorization, unless JCOM makes available the means for such distribution through functionality offered by the Service (such as the Embeddable Player). You agree not to alter or modify any part of the Service. You agree not to access Content through any technology or means. You agree not to use the Service for any of the following commercial uses unless you obtain JCOM ‘s prior written approval: the sale of access to the Service; the sale of advertising, sponsorships, or promotions placed on or within the Service or Content; or the sale of advertising, sponsorships, or promotions on any page of an ad-enabled blog or website containing Content delivered via the Service, unless other material not obtained from JCOM appears on the same page and is of sufficient value to be the basis for such sales. You agree not to use or launch any automated system, including without limitation, “robots,” “spiders,” or “offline readers,” that accesses the Service in a manner that sends more request messages to the JCOM servers in a given period of time than a human can reasonably produce in the same period by using a conventional on-line web browser. JCOM reserves the right to revoke these exceptions either generally or in specific cases. You agree not to collect or harvest any personally identifiable information, including account names, from the Service, nor to use the communication systems provided by the Service (e.g., comments, email) for any commercial solicitation purposes. You agree not to solicit, for commercial purposes, any users of the Service with respect to their Content. In your use of the Service, you will comply with all applicable laws. JCOM reserves the right to discontinue any aspect of the Service at any time without giving any reasons for such discontinuance. Your Use of Content – In addition to the general restrictions herein, it may be noted that any information, text links, graphics, photo, videos or any other materials or arrangement of material uploaded, downloaded or appearing on the Services (“the Content”) shall become the property of JCOM. The Content on the Service, and the trademarks, service marks and logos (“Marks”) on the Service, are owned by or licensed to JCOM, subject to copyright and other intellectual property rights under the law.\n  </p>\n\n  <h3>Intellectual Property</h3>\n  <p>\n    All content included on the jcombiz.com , mobile application of JCOM and in connection with the Services such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations and software, is the property of JCOM or its content suppliers and is protected by international copyright laws. All software used on the Site is the property of JCOM or its software suppliers and is protected by international copyright laws. All of the trademarks, service marks, logos, brand and trade names appearing on the Site are the proprietary intellectual property of the owners of such marks, logos or names and you may not use, modify, remove or otherwise infringe any of such proprietary intellectual property. JCOM retains full ownership rights with respect to the Site and the Services including but not limited to design, functionality, and documentation. You may not copy, edit, or reproduce any part of the Site or the Services.\n  </p>\n\n  <h3>Indemnity and Defense.</h3>\n  <p>\n    You will defend, indemnify and hold harmless JCI India, JCOM and its affiliates (and their respective office bearers, officers, and representatives) from and against any and all claims, costs, losses, damages, judgments, penalties, interest and expenses (including reasonable attorneys’ fees) that arise out of or relate to:\n(i) your use of the Site or the Services;\n(ii) any actual or alleged breach of your representations, warranties, or obligations set forth in this TOU;\n(iii) any content you provide including but not limited to any actual or alleged infringement of any intellectual property or proprietary rights of any third party.\n  </p>\n\n  <h3>Limitation of Liability.</h3>\n  <p>\n    JCOM will not be liable for direct or indirect damages of any kind, including without limitation incidental, punitive or consequential damage or loss arising out of or in connection with this TOU, the Site, the Services, inability to use the Site or the Services, or resulting from any goods or services obtained or messages received or transactions entered into through the Site or the Services.\n  </p>\n\n  <h3>Disclaimer of Warranties.</h3>\n  <p>\n    JCOM makes no representations or warranties of any kind, express or implied, concerning the Site, the Services or the content thereof. To the fullest extent permissible under applicable law JCOM disclaims any and all such warranties including without limitation:\n  </p>\n\n  <h3>Online Notices.</h3>\n  <p>\n    By using the jcombiz.com or the Services you consent to electronically receive from JCOM any communications including notices, agreements, legally required disclosures or other information in connection with the Services. JCOM may also provide such notices by posting them on the Site. If you desire to withdraw your consent to receive notices electronically you must discontinue your use of Site and the Services.\n  </p>\n\n  <h3>Severability.</h3>\n  <p>\n    In the event that any provision of this TOU is held to be invalid or unenforceable the remaining provisions of this TOU will remain in full force and effect.\n  </p>\n\n  <h3>Waiver.</h3>\n  <p>\n    JCOM will not be considered to have waived any of rights or remedies described in this TOU unless the waiver is in writing and signed by JCOM. No delay or omission by us in exercising our rights or remedies will impair or be construed as a waiver. Any single or partial exercise of a right or remedy will not preclude further exercise of any other right or remedy. Our failure to enforce the strict performance of any provision of this TOU will not constitute a waiver of JCOM’s right to subsequently enforce such provision or any other provisions of this TOU.\n  </p>\n\n  <h3>Force Majeure.</h3>\n  <p>\n    In addition to any excuse provided by applicable law, we shall be excused from liability for non-delivery or delay in delivery of Services available through our Site arising from any event beyond our reasonable control, whether or not foreseeable by either party, including but not limited to: pandamics, war, fire, accident, adverse weather, inability to secure transportation, governmental act or regulation, and other causes or events beyond our reasonable control, whether or not similar to those which are enumerated above.\n  </p>\n\n  <h3>Revisions to TOU.</h3>\n  <p>\n    JCOM reserves the right to modify or add to these TOU at any time without prior notice (“Updated TOU”). You agree that we may notify you of the Updated TOU by posting them on the Web Sites so that they are accessible via a link on the home page of the Web Site, and that your use of the Web Site after we have posted the Updated TOU (or engaging in such other conduct as we may reasonably specify) constitutes your agreement to the Updated TOU. Therefore, you should review these TOU before using the Web Sites. The Updated TOU will be effective as of the time of posting, or such later date as may be specified in the Updated TOU, and will apply to your use of the Web Sites from that point forward.\n  </p>\n\n  <h3>Termination</h3>\n  <p>\n    JCOM may terminate your Membership and use of the Web Site and Mobile Applicaiton at any time and for any reason, with or without cause, without prior notice to you and without any liability or further obligation of any kind whatsoever to you or any other party. JCOM also reserves the right to use any technological, legal, operational, or other means available to enforce these TOU, including without limitation, blocking specific IP addresses or access to the Web Sites.\n  </p>\n\n\n\n  <button ion-button (click)="close()" block>Close</button>\n\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetmodelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ForgetmodelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetmodelPage = /** @class */ (function () {
    function ForgetmodelPage(navCtrl, loadingController, navParams, http, viewCtrl, toastController) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.navParams = navParams;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.toastController = toastController;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.meeting_type = [];
        this.load();
    }
    ForgetmodelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetmodelPage');
    };
    ForgetmodelPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ForgetmodelPage.prototype.load = function () {
        var _this = this;
        var loading = this.loadingController.create({});
        loading.present();
        var type1 = "application/x-www-form-urlencoded; charset=UTF-8", url1 = this.baseURI + "get_meeting_type.php";
        this.http.get(url1).map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log("get_zone data :", data1);
            _this.meeting_type = data1;
            loading.dismiss();
        });
    };
    ForgetmodelPage.prototype.forgetsend = function () {
        var _this = this;
        console.log("Num1 : ", this.number, this.meetingType);
        var loading = this.loadingController.create({});
        loading.present();
        var body = "?mobile_no=" + this.number + "&meeting_type=" + this.meetingType, type = "application/x-www-form-urlencoded; charset=UTF-8", url = this.baseURI + "forget_password.php" + body;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            var toast = _this.toastController.create({
                message: data[0].message,
                position: 'bottom',
                duration: 6000
            });
            toast.present();
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]);
        });
    };
    ForgetmodelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgetmodel',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/login/forgetmodel/forgetmodel.html"*/'<!--\n  Generated template for the ForgetmodelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>Forget Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <!-- <ion-item>\n    <ion-label>\n      <ion-icon name="ios-call"></ion-icon>\n    </ion-label>\n    <ion-input type="tel" placeholder="Mobile Number" [(ngModel)]="number" pattern="[0-9]*" maxlength="10">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style="max-width: 35px;">\n      <ion-icon name="ios-contacts"></ion-icon>\n    </ion-label>\n    <ion-select placeholder="Meeting Type" [(ngModel)]="meetingType">\n      <div *ngFor="let data of meeting_type">\n        <ion-option value="{{data.meeting_type}}">{{data.meeting_type_name}}</ion-option>\n      </div>\n    </ion-select>\n  </ion-item>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\'12\' class="Details">\n          <button (click)="forgetsend()" class="send" ion-button>Send Instructions</button>\n      </ion-col>\n    </ion-row>\n    </ion-grid> -->\n\n\n    <!-- <div class="outer">\n      <div class="middle">\n        <div class="inner"> -->\n  \n          <div class="center-div" text-center>\n  \n            <ion-list>\n  \n              <ion-item>\n                <ion-label>\n                  <ion-icon name="ios-call"></ion-icon>\n                </ion-label>\n                <ion-input type="tel" placeholder="Mobile Number" [(ngModel)]="number" pattern="[0-9]*" maxlength="10">\n                </ion-input>\n              </ion-item>\n  \n              <ion-item>\n                <ion-label style="max-width: 35px;">\n                  <ion-icon name="ios-contacts"></ion-icon>\n                </ion-label>\n                <ion-select placeholder="Meeting Type" [(ngModel)]="meetingType">\n                  <div *ngFor="let data of meeting_type">\n                    <ion-option value="{{data.meeting_type}}">{{data.meeting_type_name}}</ion-option>\n                  </div>\n                </ion-select>\n              </ion-item>\n  \n            </ion-list>\n  \n            <div class="login-button">\n              <button (click)="forgetsend()" ion-button>Send Instructions</button>\n            </div>\n          </div>\n  \n      \n  \n        <!-- </div>\n      </div>\n    </div> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/login/forgetmodel/forgetmodel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]])
    ], ForgetmodelPage);
    return ForgetmodelPage;
}());

//# sourceMappingURL=forgetmodel.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HguestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HguestPage = /** @class */ (function () {
    function HguestPage(navCtrl, navParams, modalCtrl, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.http = http;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.guest_history = [];
    }
    HguestPage.prototype.ionViewDidLoad = function () {
        console.log('HguestPage');
        this.load();
    };
    HguestPage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id, url = _this.baseURI + "get_guest_history.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.guest_history = data;
                console.log("Hconnect data :", _this.guest_history);
            });
        });
    };
    HguestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hguest',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/hguest/hguest.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Guest History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor="let item of guest_history">\n\n    <ion-card>\n\n      <div class="flex">\n\n        <div class="left">\n          <p>{{item.date}}</p>\n\n        </div>\n\n\n        <div class="center">\n          <P class="name">{{item.guest_name}}</P>\n        </div>\n\n        <div class="center">\n          <P class="name">{{item.mobile_no}}</P>\n        </div>\n\n\n        <div class="right" style="color: green !important;" *ngIf="item.status == \'Present\'">\n          <!-- <ion-icon class="rotate1" name="arrow-up"></ion-icon> -->\n          <div class="rotate1" >P</div>\n        </div>\n        <div class="right" style="color: red !important;" *ngIf="item.status != \'Present\'">\n            <!-- <ion-icon class="rotate2" name="arrow-up"></ion-icon> -->\n          <div class="rotate2" >A</div>\n          </div>\n      </div>\n\n      <div style="padding-left: 14px;" >\n        <p> <b> Email : </b> {{item.email_id}}</p>\n      </div>\n\n      <div style="padding-left: 14px;">\n        <p> <b> City  : </b> {{item.city}}</p>\n      </div>\n\n      <div style="padding-left: 14px;">\n        <p> <b> Category : </b> {{item.business_category}}</p>\n      </div> \n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/hguest/hguest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HguestPage);
    return HguestPage;
}());

//# sourceMappingURL=hguest.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var StatsmodalPage = /** @class */ (function () {
    function StatsmodalPage(navCtrl, loadingController, http, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
    }
    StatsmodalPage.prototype.ionViewDidLoad = function () {
        console.log('StatsmodalPage');
        this.load();
    };
    StatsmodalPage.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, body4, url4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({})];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        body4 = "?type=4", url4 = this.baseURI + "get_meeting_data.php" + body4;
                        this.http.get(url4).map(function (res) { return res.json(); }).subscribe(function (data4) {
                            loading.dismiss();
                            console.log("4 data :", data4);
                            _this.c4 = data4[0].connect;
                            _this.gg4 = data4[0].gnote;
                            _this.ym4 = data4[0].youandme;
                            _this.g4 = data4[0].guest;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    StatsmodalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    StatsmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-statsmodal',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/home/statsmodal/statsmodal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>JCOM Statistics</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <div class="row" style=" margin-top: 30px;" >\n    <div class="left">\n      <p>\n        Connects\n      </p>\n    </div>\n    <div class="right">\n      <p class="green">\n        {{c4}}\n      </p>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="left">\n      <p>\n        GNote\n      </p>\n    </div>\n    <div class="right">\n      <p class="green">\n        &#8377; {{gg4}}\n      </p>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="left">\n      <p>\n        <!-- You & Me -->\n        Showcase\n      </p>\n    </div>\n    <div class="right">\n      <p class="green">\n        {{ym4}}\n      </p>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="left">\n      <p>\n        Guest\n      </p>\n    </div>\n    <div class="right">\n      <p class="green">\n        {{g4}}\n      </p>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/home/statsmodal/statsmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], StatsmodalPage);
    return StatsmodalPage;
}());

//# sourceMappingURL=statsmodal.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberscorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelmemberscore_modelmemberscore__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberscorePage = /** @class */ (function () {
    function MemberscorePage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.scoredata = this.navParams.get('data');
        console.log("Score Data In Member Score Page :", this.scoredata);
    }
    MemberscorePage.prototype.ionViewDidLoad = function () {
        console.log('MemberscorePage');
    };
    MemberscorePage.prototype.openModel = function (item) {
        console.log("item : ", item);
        var chooseModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modelmemberscore_modelmemberscore__["a" /* ModelmemberscorePage */], { data: item }, { cssClass: 'inset-modal' });
        chooseModal.onDidDismiss(function (data) {
        });
        chooseModal.present();
    };
    MemberscorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-memberscore',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/memberscore/memberscore.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Member Score</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <!-- <div *ngFor="let item of scoredata" (click)="openModel(item)">\n    <div class="flex">\n      <div class="left">\n        <img src={{item.batch_pic}} alt="">\n      </div>\n      <ion-card>\n        <p>\n            {{item.month}} MONTH\n        </p>\n      </ion-card>\n    </div>\n  </div> -->\n\n  <ion-card *ngFor="let item of scoredata" (click)="openModel(item)">\n     <p>{{item.month}}</p>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/memberscore/memberscore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MemberscorePage);
    return MemberscorePage;
}());

//# sourceMappingURL=memberscore.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelmemberscorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModelmemberscorePage = /** @class */ (function () {
    function ModelmemberscorePage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.scoredata = this.navParams.get('data');
        console.log("score data on model :", this.scoredata);
    }
    ModelmemberscorePage.prototype.ionViewDidLoad = function () {
        console.log('model member score Page');
    };
    ModelmemberscorePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModelmemberscorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modelmemberscore',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/memberscore/modelmemberscore/modelmemberscore.html"*/'<ion-content padding>\n\n  <!-- {{scoredata.month}} Score\n  Attendance Score : {{scoredata.attendance_score}}\n  Connect Score : {{scoredata.connect_score}}\n  Gnote Score : {{scoredata.gnote_score}}\n  You & Me Score : {{scoredata.youandme_score}}\n  Guest Score : {{scoredata.guest_score}}\n  Total score : {{scoredata.total_score}} -->\n\n  <div class="flexs">\n    <div class="lefts">\n      <p class="caps orange">{{scoredata.month}}</p>\n      <p>Attendance Score:</p>\n      <p>Connect Score:</p>\n      <p>Gnote Score:</p>\n      <!-- <p>You & Me Score:</p> -->\n      <p>Showcase Score:</p>\n      <p>Guest Score:</p>\n      <p>Total Score:</p>\n    </div>\n    <div class="rights">\n      <p>Score</p>\n      <p>{{scoredata.attendance_score}}</p>\n      <p>{{scoredata.connect_score}}</p>\n      <p>{{scoredata.gnote_score}}</p>\n      <p>{{scoredata.youandme_score}}</p>\n      <p>{{scoredata.guest_score}}</p>\n      <p class="orange">{{scoredata.total_score}}</p>\n    </div>\n  </div>\n\n  <div class="bs">\n    <img src="{{scoredata.batch_pic}}" alt="">\n  </div>\n  \n\n</ion-content>\n\n<ion-footer>\n  <button class="close" ion-button full (click)="close()">Close</button>\n</ion-footer>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/memberscore/modelmemberscore/modelmemberscore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ModelmemberscorePage);
    return ModelmemberscorePage;
}());

//# sourceMappingURL=modelmemberscore.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HshowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HshowPage = /** @class */ (function () {
    function HshowPage(navCtrl, navParams, modalCtrl, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.http = http;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.show_history = [];
    }
    HshowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HshowPage');
        this.load();
    };
    HshowPage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id, url = _this.baseURI + "get_showcase_history.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.show_history = data;
                console.log("Hconnect data :", _this.show_history);
            });
        });
    };
    HshowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hshow',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/hshow/hshow.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Showcase History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div *ngFor="let item of show_history">\n\n    <ion-card>\n\n      <div class="flex">\n\n        <div class="left">\n          <p>{{item.date}}</p>\n        </div>\n\n        <div class="center">\n          <P class="name">{{item.mode}}</P>\n        </div>\n\n        <div class="right">\n          <P class="name">{{item.title}}</P>\n        </div>\n\n      </div>\n    </ion-card>\n\n  </div>\n\n</ion-content>+-+\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/hshow/hshow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HshowPage);
    return HshowPage;
}());

//# sourceMappingURL=hshow.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_member_view_member__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberPage = /** @class */ (function () {
    function MemberPage(navCtrl, navParams, modalCtrl, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.http = http;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.dislist = [];
    }
    MemberPage.prototype.ionViewDidLoad = function () {
        console.log('MemberPage');
        this.load();
    };
    MemberPage.prototype.initializeItems = function () {
        this.dislist = this.items;
    };
    MemberPage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id, url = _this.baseURI + "get_jib_table.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.dislist = data;
                _this.items = data;
                console.log("dis data :", _this.dislist);
            });
        });
    };
    MemberPage.prototype.view = function (tid) {
        console.log({ tid: tid });
        // console.log("Table Id :",event.value.table_id);
        // this.navCtrl.push(ViewMemberPage,{data:event.value.table_id});
        console.log("Table Id :", tid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__view_member_view_member__["a" /* ViewMemberPage */], { data: tid });
    };
    MemberPage.prototype.onInput = function (ev) {
        console.log({ ev: ev }, this.myInput);
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.dislist = this.items.filter(function (item) {
                return (item.table_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    MemberPage.prototype.onCancel = function (ev) {
        console.log({ ev: ev }, this.myInput);
    };
    MemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-member',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/member/member.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Table</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n\n  <div class="rows" >\n    <!-- <div class="lab">\n      <ion-icon name="ios-briefcase"></ion-icon>\n    </div>\n    <div class="inp">\n      <select-searchable class="uplo" item-content placeholder=" Choose Business Category"\n        [items]="dislist" itemValueField="table_id" itemTextField="table_name" [canSearch]="true"\n        (onChange)="view($event)"\n        >\n      </select-searchable>\n    </div> -->\n    <ion-searchbar\n  [(ngModel)]="myInput"\n  [showCancelButton]=true\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar>\n\n  </div>\n\n  <div class="empty" *ngFor="let item of dislist">\n    <ion-card class="grid" (click)="view(tid?.value)">\n        <div class="row">\n            <div class="title">\n              <p>{{item.table_name}}</p>\n            </div>\n            <div class="ey-ic">\n              <img src="assets/imgs/ey-ic.png" alt="">\n            </div>\n          </div>\n    </ion-card>\n    <ion-textarea style="display: none;" value="{{item.table_id}}" #tid></ion-textarea>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/member/member.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], MemberPage);
    return MemberPage;
}());

//# sourceMappingURL=member.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modelmember_modelmember__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewMemberPage = /** @class */ (function () {
    function ViewMemberPage(navCtrl, navParams, loadingCtrl, modalCtrl, toastController, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.storage = storage;
        this.http = http;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.memberlist = [];
        this.t_id = this.navParams.get('data');
    }
    ViewMemberPage.prototype.ionViewDidLoad = function () {
        console.log('ViewMemberPage');
        this.load();
    };
    ViewMemberPage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var loader = _this.loadingCtrl.create({
                // duration: 3000,
                spinner: 'dots'
            });
            loader.present();
            var m_id = val;
            var body = "?table_id=" + _this.t_id + "&m_id=" + m_id, url = _this.baseURI + "get_jib_table_members.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.memberlist = data;
                if (_this.memberlist != null) {
                    console.log("Member data :", _this.memberlist);
                    loader.dismiss();
                }
                else {
                    loader.dismiss();
                    _this.memberlist = null;
                    var toast = _this.toastController.create({
                        message: 'No Members',
                        position: 'bottom',
                        duration: 3000
                    });
                    toast.present();
                }
            });
        });
    };
    // bc,mn,email,web,con,state,zone,city,lom,jt,add,dis,pin,dp,bi,bk,pro,nc
    ViewMemberPage.prototype.modal = function (bc, mn, email, web, con, state, zone, city, lom, jt, add, dis, pin, dp, bi, bk, pro, nc, name, bn) {
        console.log("Name1 :", name);
        console.log("BN1 :", bn);
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modelmember_modelmember__["a" /* ModelmemberPage */], { data: bc, data1: mn, data2: email, data3: web,
            data4: con, data5: state, data6: zone, data7: city,
            data8: lom, data9: jt, data10: add, data11: dis,
            data12: pin, data13: dp, data14: bi, data15: bk,
            data16: pro, data17: nc, data18: name, data19: bn }, { cssClass: 'inset-modal' })
            .present();
    };
    ViewMemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-member',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/view-member/view-member.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Members</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor="let item of memberlist">\n    <ion-card class="list" (click)="modal(\n          bc?.value,mn?.value,email?.value,web?.value,con?.value,state?.value,zone?.value,city?.value,lom?.value,jt?.value,\n          add?.value,dis?.value,pin?.value,dp?.value,bi?.value,bk?.value,pro?.value,nc?.value,name?.value,bn?.value\n        )">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://admin.jcombiz.com/{{item.profile_photo}}">\n        </ion-avatar>\n\n        <div class="row">\n          <div class="title">\n            <h2>{{item.name}}</h2>\n            <p>{{item.business_name}}</p>\n          </div>\n          <div class="ey-ic">\n            <img src="assets/imgs/ey-ic.png" alt="">\n          </div>\n        </div>\n        \n      </ion-item>\n\n      <ion-textarea value="{{item.business_category}}" #bc></ion-textarea>\n      <ion-textarea value="{{item.p_mobile_no}}" #mn></ion-textarea>\n      <ion-textarea value="{{item.p_email_id}}" #email></ion-textarea>\n      <ion-textarea value="{{item.website}}" #web></ion-textarea>\n      <ion-textarea value="{{item.country}}" #con></ion-textarea>\n      <ion-textarea value="{{item.state}}" #state></ion-textarea>\n      <ion-textarea value="{{item.zone}}" #zone></ion-textarea>\n      <ion-textarea value="{{item.city}}" #city></ion-textarea>\n      <ion-textarea value="{{item.lom}}" #lom></ion-textarea>\n      <ion-textarea value="{{item.jib_table}}" #jt></ion-textarea>\n      <ion-textarea value="{{item.address}}" #add></ion-textarea>\n      <ion-textarea value="{{item.district}}" #dis></ion-textarea>\n      <ion-textarea value="{{item.pincode}}" #pin></ion-textarea>\n      <ion-textarea value="{{item.profile_photo}}" #dp></ion-textarea>\n      <ion-textarea value="{{item.business_info}}" #bi></ion-textarea>\n      <ion-textarea value="{{item.business_keywords}}" #bk></ion-textarea>\n      <ion-textarea value="{{item.products}}" #pro></ion-textarea>\n      <ion-textarea value="{{item.needed_contacts}}" #nc></ion-textarea>\n      <ion-textarea value="{{item.name}}" #name></ion-textarea>\n      <ion-textarea value="{{item.business_name}}" #bn></ion-textarea>\n\n    </ion-card>\n\n    <!-- <ion-card>\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="{{item.profile_photo}}">\n              </ion-avatar>\n              <h2>{{item.name}}</h2>\n              <p>{{item.business_name}}</p>\n            </ion-item>          \n        </ion-card> -->\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/view-member/view-member.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ViewMemberPage);
    return ViewMemberPage;
}());

//# sourceMappingURL=view-member.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modelmember_modelmember__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_key_search_key__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, storage, modalCtrl, alertCtrl, loadingCtrl, loadingController, toastController, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.http = http;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.buisnessdata = [];
        this.buisness_members = [];
        this.hide = false;
        this.keyword = false;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('SearchPage');
        this.load();
    };
    SearchPage.prototype.load = function () {
        var _this = this;
        var url = this.baseURI + "get_business_category.php";
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("Business data :", data);
            _this.buisnessdata = data;
        });
    };
    SearchPage.prototype.select = function (bc) {
        var _this = this;
        this.hide = true;
        console.log("Selected ", bc.id);
        var loader = this.loadingCtrl.create({
            // duration: 3000,
            spinner: 'dots'
        });
        loader.present();
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?category_id=" + bc.id + "&m_id=" + m_id, url = _this.baseURI + "get_category_members.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.buisness_members = data;
                if (data != null) {
                    loader.dismiss();
                    _this.buisness_members = data;
                    console.log("Member data :", _this.buisness_members);
                }
                else {
                    loader.dismiss();
                    _this.buisness_members = null;
                    var toast = _this.toastController.create({
                        message: 'No Members',
                        position: 'bottom',
                        duration: 3000
                    });
                    toast.present();
                }
            });
        });
    };
    SearchPage.prototype.modal = function (bc, mn, email, web, con, state, zone, city, lom, jt, add, dis, pin, dp, bi, bk, pro, nc, name, bn) {
        console.log("Name1 :", name);
        console.log("BN1 :", bn);
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modelmember_modelmember__["a" /* ModelmemberPage */], { data: bc, data1: mn, data2: email, data3: web,
            data4: con, data5: state, data6: zone, data7: city,
            data8: lom, data9: jt, data10: add, data11: dis,
            data12: pin, data13: dp, data14: bi, data15: bk,
            data16: pro, data17: nc, data18: name, data19: bn }, { cssClass: 'inset-modal' })
            .present();
    };
    SearchPage.prototype.searchKey = function () {
        var _this = this;
        console.log(this.searchKeyword);
        var loader = this.loadingCtrl.create({
            // duration: 3000,
            spinner: 'dots'
        });
        loader.present();
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id + "&keyword=" + _this.searchKeyword, url = _this.baseURI + "get_keyword_search.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log({ data: data });
                if (data == null) {
                    var toast = _this.toastController.create({
                        message: 'There is no data Here',
                        position: 'middle',
                        duration: 3000
                    });
                    toast.present();
                    loader.dismiss();
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__search_key_search_key__["a" /* SearchKeyPage */], { data: data });
                    loader.dismiss();
                }
            });
        });
    };
    SearchPage.prototype.choose = function (type) {
        this.keyword = type;
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search members</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div class="flex">\n    <button ion-button (click)="choose(false)" >Search By Business</button>\n    <button ion-button (click)="choose(true)" >Seach By Keyword</button>\n  </div>\n\n  <div class="rows" *ngIf=\'!keyword\'>\n    <div class="lab">\n      <ion-icon name="ios-briefcase"></ion-icon>\n    </div>\n    <div class="inp">\n      <select-searchable class="uplo" item-content placeholder=" Choose Business Category" [(ngModel)]="buisness"\n        [items]="buisnessdata" itemValueField="id" itemTextField="category" [canSearch]="true"\n        (onChange)="select(buisness)">\n      </select-searchable>\n    </div>\n  </div>\n\n  <div *ngIf="hide"  >\n    <div  *ngIf=\'!keyword\'>\n    <div *ngFor="let item of buisness_members" >\n      <ion-card (click)="modal(\n              bc?.value,mn?.value,email?.value,web?.value,con?.value,state?.value,zone?.value,city?.value,lom?.value,jt?.value,\n              add?.value,dis?.value,pin?.value,dp?.value,bi?.value,bk?.value,pro?.value,nc?.value,name?.value,bn?.value\n            )">\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="https://admin.jcombiz.com/{{item.profile_photo}}">\n          </ion-avatar>\n\n          <div class="row">\n            <div class="title">\n              <h2>{{item.name}}</h2>\n              <p>{{item.business_name}}</p>\n            </div>\n            <div class="ey-ic">\n              <img src="assets/imgs/ey-ic.png" alt="">\n            </div>\n          </div>\n\n        </ion-item>\n\n        <ion-textarea style="display: none;" value="{{item.business_category}}" #bc></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.p_mobile_no}}" #mn></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.p_email_id}}" #email></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.website}}" #web></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.country}}" #con></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.state}}" #state></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.zone}}" #zone></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.city}}" #city></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.lom}}" #lom></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.jib_table}}" #jt></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.address}}" #add></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.district}}" #dis></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.pincode}}" #pin></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.profile_photo}}" #dp></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.business_info}}" #bi></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.business_keywords}}" #bk></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.products}}" #pro></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.needed_contacts}}" #nc></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.name}}" #name></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.business_name}}" #bn></ion-textarea>\n      </ion-card>\n    </div>\n  </div>\n  </div>\n\n  <div class="se-key" *ngIf="keyword">\n\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" class="rough" [(ngModel)]=\'searchKeyword\' placeholder="Search Keyword" value=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <button (click)="searchKey()" ion-button>Search By Keyword</button>\n\n  </div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchKeyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modelmember_modelmember__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SearchKeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchKeyPage = /** @class */ (function () {
    function SearchKeyPage(navCtrl, navParams, storage, modalCtrl, alertCtrl, loadingCtrl, loadingController, toastController, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.http = http;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.buisnessdata = [];
        this.buisness_members = [];
        this.memberslist = [];
        this.hide = false;
        this.keyword = false;
        this.ports = [];
        this.memberslist = this.navParams.data.data;
        this.items = this.navParams.data.data;
        console.log("memberslist:", this.memberslist);
        this.ports = [
            { id: 1, name: 'Tokai' },
            { id: 2, name: 'Vladivostok' },
            { id: 3, name: 'Navlakhi' }
        ];
    }
    SearchKeyPage.prototype.portChange = function (event) {
        console.log('port:', event.value);
    };
    SearchKeyPage.prototype.initializeItems = function () {
        this.memberslist = this.items;
    };
    SearchKeyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchKeyPage');
    };
    SearchKeyPage.prototype.select = function (bc) {
        console.log("Business:", this.buisness);
        this.hide = true;
        console.log("Selected ", bc);
        this.buisness_members = [bc];
        // const loader = this.loadingCtrl.create({
        //   spinner:'dots'
        // });
        // loader.present();
        // this.storage.get('jibmid').then((val)=>{
        //   var m_id = val;
        // let body: string = "?category_id="+bc.id+"&m_id="+m_id,
        //   url: any = this.baseURI + "get_category_members.php" + body;
        //   this.http.get(url).map(res => res.json()).subscribe(data => {
        //         this.buisness_members = data;
        //         if(data != null){
        //           loader.dismiss();
        //           this.buisness_members = data;
        //         console.log("Member data :",this.buisness_members);
        //         }else{
        //           loader.dismiss();
        //           this.buisness_members = null;
        //           const toast = this.toastController.create({
        //             message: 'No Members',
        //             position: 'bottom',
        //             duration:3000
        //           });
        //           toast.present();
        //         }
        //   });
        // });
    };
    SearchKeyPage.prototype.modal = function (bc, mn, email, web, con, state, zone, city, lom, jt, add, dis, pin, dp, bi, bk, pro, nc, name, bn) {
        console.log("Name1 :", name);
        console.log("BN1 :", bn);
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modelmember_modelmember__["a" /* ModelmemberPage */], { data: bc, data1: mn, data2: email, data3: web,
            data4: con, data5: state, data6: zone, data7: city,
            data8: lom, data9: jt, data10: add, data11: dis,
            data12: pin, data13: dp, data14: bi, data15: bk,
            data16: pro, data17: nc, data18: name, data19: bn }, { cssClass: 'inset-modal' })
            .present();
    };
    SearchKeyPage.prototype.onInput = function (ev) {
        console.log({ ev: ev }, this.myInput);
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.memberslist = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchKeyPage.prototype.onCancel = function (ev) {
        console.log({ ev: ev }, this.myInput);
    };
    SearchKeyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search-key',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/search-key/search-key.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search members</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="rows">\n    <!-- <div class="lab">\n      <ion-icon name="ios-briefcase"></ion-icon>\n    </div>\n    <div class="inp">\n      <select-searchable class="uplo" item-content placeholder=" Choose  Member" [(ngModel)]="member"\n        [items]="memberslist" itemValueField="m_id" itemTextField="name" [canSearch]="true"\n        (onChange)="select(member)"\n        >\n      </select-searchable>\n      <select-searchable class="uplo" item-content placeholder="Connect To"  [items]="memberslist"\n        itemValueField="id" itemTextField="name" [canSearch]="true">\n      </select-searchable>\n    </div> -->\n\n    <ion-searchbar [(ngModel)]="myInput" [showCancelButton]=true (ionInput)="onInput($event)"\n      (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n  </div>\n\n  <div>\n    <div *ngFor="let item of memberslist">\n      <ion-card (click)="modal(\n              bc?.value,mn?.value,email?.value,web?.value,con?.value,state?.value,zone?.value,city?.value,lom?.value,jt?.value,\n              add?.value,dis?.value,pin?.value,dp?.value,bi?.value,bk?.value,pro?.value,nc?.value,name?.value,bn?.value\n            )">\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="https://admin.jcombiz.com/{{item.profile_photo}}">\n          </ion-avatar>\n\n          <div class="row">\n            <div class="title">\n              <h2>{{item.name}}</h2>\n              <p>{{item.business_name}}</p>\n            </div>\n            <div class="ey-ic">\n              <img src="assets/imgs/ey-ic.png" alt="">\n            </div>\n          </div>\n\n        </ion-item>\n\n        <ion-textarea style="display: none;" value="{{item.business_category}}" #bc></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.p_mobile_no}}" #mn></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.p_email_id}}" #email></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.website}}" #web></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.country}}" #con></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.state}}" #state></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.zone}}" #zone></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.city}}" #city></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.lom}}" #lom></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.jib_table}}" #jt></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.address}}" #add></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.district}}" #dis></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.pincode}}" #pin></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.profile_photo}}" #dp></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.business_info}}" #bi></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.business_keywords}}" #bk></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.products}}" #pro></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.needed_contacts}}" #nc></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.name}}" #name></ion-textarea>\n        <ion-textarea style="display: none;" value="{{item.business_name}}" #bn></ion-textarea>\n      </ion-card>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/search-key/search-key.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], SearchKeyPage);
    return SearchKeyPage;
}());

//# sourceMappingURL=search-key.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutJcomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutJcomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutJcomPage = /** @class */ (function () {
    function AboutJcomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutJcomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutJcomPage');
    };
    AboutJcomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-jcom',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/about-jcom/about-jcom.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About JCOM</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="content">\n    <h4>About JCI INDIA</h4>\n    <p class="para">Junior Chamber International (JCI) is an international organization founded in 1915 at St Louis, USA, and having its International Head Quarters at Chesterfield, St. Louis, USA. It is an NGO, imparting training to youth, developing them and transforms them as active citizen, for sustainable positive change around the world. It works with many organizations including UN, for sustainable development globally.  JCI is spread in above 100 countries. Each Country is known as a National Organization Member (NOM). In India, JCI was launched in 1949. JCI India is the NOM affiliated to JCI, which is the international body.\n      JCI India is a registered society under the Societies Registration Act XXI of 1860 as amended by the Societies Registration Act (Punjab Amendment Act 1957) as extended to the State of Delhi.\n    </p>\n  </div>\n\n\n  <div class="content">\n    <h4>About JCOM</h4>\n    <p class="para">JCOM is a Business area program exclusively for JCI members.The objective of the program is to develop the business opportunity of JCI members through networking.\n    </p>\n  </div>\n\n  <div class="content">\n    <h4>Mission</h4>\n    <p class="para">To create and provide dynamic tools and development opportunities ensuring ethical business practices that nurture the exponential business growth of its members.\n    </p>\n  </div>\n\n  <div class="content">\n    <h4>Vision</h4>\n    <p class="para">To create a business development platform for entrepreneurs of JCI fraternity to connect & grow locally and globally\n    </p>\n  </div>\n\n  <div class="content">\n    <h4>Membership Oath</h4>\n    <p class="para">I do promise that I will faithfully serve the purposes of JCOM, and will  be  truthful with members and customers in providing the quality service by following the ethics of good business with the guidelines of JCOM\n    </p>\n  </div>\n\n  <div class="content">\n    <h4>Officers Oath</h4>\n    <p class="para">I do solemnly Swear that I will Faithfully serve the purposes of JCOM and  will to the best of my ability serve as a living example of JCOM philosophy and belief and will uphold and enforce the guidelines and policies of JCOM  at all times.\n    </p>\n  </div>\n\n  <!-- <button style="text-align: center;" ion-button  >\n    <a style="color: white;" href="https://jcombiz.com/">Visit Website</a> \n    \n  </button> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/about-jcom/about-jcom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AboutJcomPage);
    return AboutJcomPage;
}());

//# sourceMappingURL=about-jcom.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HattendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HattendancePage = /** @class */ (function () {
    function HattendancePage(navCtrl, navParams, modalCtrl, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.http = http;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.guest_history = [];
    }
    HattendancePage.prototype.ionViewDidLoad = function () {
        console.log('HguestPage');
        this.load();
    };
    HattendancePage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id, url = _this.baseURI + "get_attendance_history.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.attendance_history = data;
                console.log("Hconnect data :", _this.attendance_history);
            });
        });
    };
    HattendancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hattendance',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/hattendance/hattendance.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> Attendance History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor="let item of attendance_history">\n\n    <ion-card>\n\n      <div class="flex">\n<!-- \n        <div class="left">\n          <p>{{item.date}}</p>\n        </div> -->\n\n\n        <div class="center">\n          <P class="name">{{item.date}}</P>\n\n        </div>\n\n        <!-- <div class="center">\n          <P class="name">{{item.mobile_no}}</P>\n        </div> -->\n\n\n        <div class="right" style="color: green !important;" *ngIf="item.attendance == \'P\'">\n          <!-- <ion-icon class="rotate1" name="arrow-up"></ion-icon> -->\n          <div class="rotate1" >P</div>\n        </div>\n        <div class="right" style="color: red !important;" *ngIf="item.attendance != \'P\'">\n            <!-- <ion-icon class="rotate2" name="arrow-up"></ion-icon> -->\n          <div class="rotate2" >A</div>\n          </div>\n      </div>\n    </ion-card>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/hattendance/hattendance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HattendancePage);
    return HattendancePage;
}());

//# sourceMappingURL=hattendance.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(267);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_gnote_gnote__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_connect_connect__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_you_you__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_guest_guest__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_statsmodal_statsmodal__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_contacts__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profilemodal_profilemodal__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_hconnect_hconnect__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_hgnote_hgnote__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_hyou_hyou__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_modelconnect_modelconnect__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_modelgnote_modelgnote__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_modelyou_modelyou__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_select_searchable__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_member_member__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_search_search__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_view_member_view_member__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_modelmember_modelmember__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_call_number__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_connect_member_connect_member__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_gnote_modelconnectmember_modelconnectmember__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_memberscore_memberscore__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_memberscore_modelmemberscore_modelmemberscore__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_register_register__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_showcase_showcase__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_about_jcom_about_jcom__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_social_sharing__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_qr_scanner__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_barcode_scanner__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_hguest_hguest__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_hshow_hshow__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_geolocation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_search_key_search_key__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_pconnect_pconnect__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_hattendance_hattendance__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_crop__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_base64_ngx__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_file__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_terms_terms__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_objects_objects__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_login_forgetmodel_forgetmodel__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_file_path__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_market__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_app_version__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { ListPage } from '../pages/list/list';





















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_statsmodal_statsmodal__["a" /* StatsmodalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_gnote_gnote__["a" /* GnotePage */], __WEBPACK_IMPORTED_MODULE_10__pages_connect_connect__["a" /* ConnectPage */], __WEBPACK_IMPORTED_MODULE_11__pages_you_you__["a" /* YouPage */], __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */], __WEBPACK_IMPORTED_MODULE_13__pages_guest_guest__["a" /* GuestPage */], __WEBPACK_IMPORTED_MODULE_14__pages_home_statsmodal_statsmodal__["a" /* StatsmodalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profilemodal_profilemodal__["a" /* ProfilemodalPage */], __WEBPACK_IMPORTED_MODULE_21__pages_hconnect_hconnect__["a" /* HconnectPage */], __WEBPACK_IMPORTED_MODULE_22__pages_hgnote_hgnote__["a" /* HgnotePage */], __WEBPACK_IMPORTED_MODULE_23__pages_hyou_hyou__["a" /* HyouPage */], __WEBPACK_IMPORTED_MODULE_24__pages_modelconnect_modelconnect__["a" /* ModelconnectPage */], __WEBPACK_IMPORTED_MODULE_25__pages_modelgnote_modelgnote__["a" /* ModelgnotePage */], __WEBPACK_IMPORTED_MODULE_26__pages_modelyou_modelyou__["a" /* ModelyouPage */], __WEBPACK_IMPORTED_MODULE_28__pages_member_member__["a" /* MemberPage */], __WEBPACK_IMPORTED_MODULE_29__pages_search_search__["a" /* SearchPage */], __WEBPACK_IMPORTED_MODULE_30__pages_view_member_view_member__["a" /* ViewMemberPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_modelmember_modelmember__["a" /* ModelmemberPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_gnote_modelconnectmember_modelconnectmember__["a" /* ModelconnectmemberPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_connect_member_connect_member__["a" /* ConnectMemberPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_memberscore_memberscore__["a" /* MemberscorePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_memberscore_modelmemberscore_modelmemberscore__["a" /* ModelmemberscorePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_showcase_showcase__["a" /* ShowcasePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_about_jcom_about_jcom__["a" /* AboutJcomPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_hguest_hguest__["a" /* HguestPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_hshow_hshow__["a" /* HshowPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_search_key_search_key__["a" /* SearchKeyPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_pconnect_pconnect__["a" /* PconnectPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_hattendance_hattendance__["a" /* HattendancePage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_login_forgetmodel_forgetmodel__["a" /* ForgetmodelPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_27_ionic_select_searchable__["SelectSearchableModule"],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/qr-scanner/qr-scanner.module#QrScannerPageModule', name: 'QrScannerPage', segment: 'qr-scanner', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_statsmodal_statsmodal__["a" /* StatsmodalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_gnote_gnote__["a" /* GnotePage */], __WEBPACK_IMPORTED_MODULE_10__pages_connect_connect__["a" /* ConnectPage */], __WEBPACK_IMPORTED_MODULE_11__pages_you_you__["a" /* YouPage */], __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */], __WEBPACK_IMPORTED_MODULE_13__pages_guest_guest__["a" /* GuestPage */], __WEBPACK_IMPORTED_MODULE_14__pages_home_statsmodal_statsmodal__["a" /* StatsmodalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profilemodal_profilemodal__["a" /* ProfilemodalPage */], __WEBPACK_IMPORTED_MODULE_21__pages_hconnect_hconnect__["a" /* HconnectPage */], __WEBPACK_IMPORTED_MODULE_22__pages_hgnote_hgnote__["a" /* HgnotePage */], __WEBPACK_IMPORTED_MODULE_23__pages_hyou_hyou__["a" /* HyouPage */], __WEBPACK_IMPORTED_MODULE_24__pages_modelconnect_modelconnect__["a" /* ModelconnectPage */], __WEBPACK_IMPORTED_MODULE_25__pages_modelgnote_modelgnote__["a" /* ModelgnotePage */], __WEBPACK_IMPORTED_MODULE_26__pages_modelyou_modelyou__["a" /* ModelyouPage */], __WEBPACK_IMPORTED_MODULE_28__pages_member_member__["a" /* MemberPage */], __WEBPACK_IMPORTED_MODULE_29__pages_search_search__["a" /* SearchPage */], __WEBPACK_IMPORTED_MODULE_30__pages_view_member_view_member__["a" /* ViewMemberPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_modelmember_modelmember__["a" /* ModelmemberPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_gnote_modelconnectmember_modelconnectmember__["a" /* ModelconnectmemberPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_connect_member_connect_member__["a" /* ConnectMemberPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_memberscore_memberscore__["a" /* MemberscorePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_memberscore_modelmemberscore_modelmemberscore__["a" /* ModelmemberscorePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_showcase_showcase__["a" /* ShowcasePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_about_jcom_about_jcom__["a" /* AboutJcomPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_hguest_hguest__["a" /* HguestPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_hshow_hshow__["a" /* HshowPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_search_key_search_key__["a" /* SearchKeyPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_pconnect_pconnect__["a" /* PconnectPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_hattendance_hattendance__["a" /* HattendancePage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_login_forgetmodel_forgetmodel__["a" /* ForgetmodelPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_contacts__["a" /* Contacts */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_crop__["a" /* Crop */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_base64_ngx__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_53__providers_objects_objects__["a" /* ObjectsProvider */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_56__ionic_native_market__["a" /* Market */],
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_app_version__["a" /* AppVersion */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_53__providers_objects_objects__["a" /* ObjectsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_gnote_gnote__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_connect_connect__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_you_you__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_guest_guest__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_member_member__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_search_search__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_showcase_showcase__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_jcom_about_jcom__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_barcode_scanner__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_hattendance_hattendance__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_crop__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_objects_objects__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_market__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_app_version__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



















// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';







var MyApp = /** @class */ (function () {
    function MyApp(platform, alertController, loadingController, toastController, http, statusBar, 
    // public qrScanner: QRScanner,
    barcodeScanner, storage, socialSharing, alertCtrl, geolocation, splashScreen, crop, obj, appVersion, market) {
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
        var _this = this;
        this.platform = platform;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.http = http;
        this.statusBar = statusBar;
        this.barcodeScanner = barcodeScanner;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.splashScreen = splashScreen;
        this.crop = crop;
        this.obj = obj;
        this.appVersion = appVersion;
        this.market = market;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.counter = 0;
        platform.registerBackButtonAction(function () {
            console.log("Active Page Name:", _this.obj.pageName);
            // alert("back");
            _this.counter++;
            var pag = _this.nav.getActive().name;
            console.log("active page Component : ", pag);
            if (_this.obj.pageName == "Home") {
                var alert_1 = _this.alertCtrl.create({
                    message: 'Do you want to Exit ?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                                _this.counter = 0;
                            }
                        },
                        {
                            text: 'OK',
                            handler: function () {
                                console.log('Ok clicked');
                                platform.exitApp();
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
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
    MyApp.prototype.dashpage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.profilepage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.gnotepage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_gnote_gnote__["a" /* GnotePage */]);
    };
    MyApp.prototype.connectpage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_connect_connect__["a" /* ConnectPage */]);
    };
    MyApp.prototype.youpage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_you_you__["a" /* YouPage */]);
    };
    MyApp.prototype.guestpage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_guest_guest__["a" /* GuestPage */]);
    };
    MyApp.prototype.logout = function () {
        this.storage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.memberpage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_member_member__["a" /* MemberPage */]);
    };
    MyApp.prototype.abour_jcom = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_about_jcom_about_jcom__["a" /* AboutJcomPage */]);
    };
    MyApp.prototype.app_share = function () {
        var msg = "https://play.google.com/store/apps/details?id=com.jcom";
        this.socialSharing.share(msg, 'JCOM', null, null);
    };
    MyApp.prototype.attendance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.storage.get('jibmid').then(function (val) { return __awaiter(_this, void 0, void 0, function () {
                    var m_id, loading;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                m_id = val;
                                return [4 /*yield*/, this.loadingController.create({})];
                            case 1:
                                loading = _a.sent();
                                return [4 /*yield*/, loading.present()];
                            case 2:
                                _a.sent();
                                this.geolocation.getCurrentPosition().then(function (resp) {
                                    console.log({ resp: resp });
                                    _this.lat = resp.coords.latitude;
                                    _this.lng = resp.coords.longitude;
                                    loading.dismiss();
                                    if (_this.lat) {
                                        _this.barcodeScanner.scan().then(function (barcodeData) {
                                            console.log("barcode scaned :", barcodeData);
                                            var loading = _this.loadingController.create({});
                                            loading.present();
                                            if (barcodeData.cancelled == true) {
                                                console.log("barcodeData:", barcodeData);
                                                loading.dismiss();
                                            }
                                            else {
                                                var body = "?m_id=" + m_id + "&qr_code=" + barcodeData.text + "&lat=" + _this.lat + "&lng=" + _this.lng, url = _this.baseURI + "send_attendance.php" + body;
                                                _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                                                    loading.dismiss();
                                                    console.log("send_attendance data : ", data);
                                                    alert(data[0].status);
                                                    var toast = _this.toastController.create({
                                                        message: data[0].status,
                                                        position: 'bottom',
                                                        duration: 2000,
                                                        closeButtonText: 'OK'
                                                    });
                                                    toast.present();
                                                    // loading.dismiss();
                                                });
                                            }
                                        }, function (err) {
                                            console.log("Error:", err);
                                            alert('Error:' + err);
                                        });
                                    }
                                    else {
                                        alert("GeoLocation Data Missing!");
                                    }
                                }).catch(function (error) {
                                    loading.dismiss();
                                    console.log('Error getting location', error);
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    MyApp.prototype.attendanceHistory = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_21__pages_hattendance_hattendance__["a" /* HattendancePage */]);
    };
    MyApp.prototype.searchpage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_search_search__["a" /* SearchPage */]);
    };
    MyApp.prototype.Showcase = function () {
        // const toast = this.toastController.create({
        //   message: 'Coming Soon',
        //   position: 'bottom',
        //   duration: 2000,
        //   closeButtonText: 'OK'
        // });
        // toast.present();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_showcase_showcase__["a" /* ShowcasePage */]);
    };
    MyApp.prototype.changepsw = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var alert = _this.alertController.create({
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
                        handler: function () {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: function (data) {
                            if (data.newpsw == "") {
                                console.log('Confirm Ok', data.newpsw);
                                var toast = _this.toastController.create({
                                    message: 'Enter the Password',
                                    position: 'bottom',
                                    duration: 2000
                                });
                                toast.present();
                                alert.present();
                            }
                            else {
                                var loading_1 = _this.loadingController.create({});
                                loading_1.present();
                                var body = "?m_id=" + m_id + "&password=" + data.newpsw, type = "application/x-www-form-urlencoded; charset=UTF-8", 
                                // headers: any = new Headers({ 'Content-Type': type }),
                                url = _this.baseURI + "change_password.php" + body;
                                _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    if (data[0].status == "success") {
                                        var toast = _this.toastController.create({
                                            message: 'Password Changed',
                                            position: 'bottom',
                                            duration: 2000,
                                            closeButtonText: 'OK'
                                        });
                                        toast.present();
                                        loading_1.dismiss();
                                        _this.storage.clear();
                                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
                                    }
                                    if (data[0].status != "success") {
                                        var toast = _this.toastController.create({
                                            message: 'Error On changing password',
                                            position: 'bottom',
                                            duration: 2000
                                        });
                                        toast.present();
                                        loading_1.dismiss();
                                    }
                                });
                            }
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    MyApp.prototype.checkVersion = function () {
        // const loading = this.loadingController.create({
        // });
        // loading.present();
        var _this = this;
        var body = "?type=" + 2, type = "application/x-www-form-urlencoded; charset=UTF-8", 
        // headers: any = new Headers({ 'Content-Type': type }),
        url = this.baseURI + "get_version.php" + body;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log({ data: data });
            // alert("Before Enter in App:"+data[0]["registration"]);
            localStorage.setItem('registration', data[0]["registration"]);
            // alert(data);
            if (data[0].maintenance_mode == true) {
                alert("Application is Under Maintenance!");
                _this.platform.exitApp();
            }
            else if (data[0].maintenance_mode == false) {
                console.log("Not in Maintenance");
                _this.appVersion.getVersionNumber().then(function (version) {
                    console.log("Version:", version, version['version']);
                    var appVersion = version;
                    console.log(data[0].version, appVersion, data[0].version == appVersion);
                    if (data[0].version > appVersion) {
                        alert("Your Application Update is Available!");
                        _this.market.open('com.jcom');
                    }
                    else {
                        var toast = _this.toastController.create({
                            message: 'Mobile Version UptoDate',
                            position: 'bottom',
                            duration: 2000,
                            closeButtonText: 'OK'
                        });
                        toast.present();
                        _this.initializeApp();
                    }
                });
            }
            _this.appVersion.getVersionNumber();
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
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
            _this.storage.get('jibmid').then(function (val) {
                if (val > 0) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
            });
            _this.storage.get('jibname').then(function (name) {
                _this.member_name = name;
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/neophron/jcomApp/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-content >\n      <!-- style="padding-top:115px; background: linear-gradient(to bottom, #000099 0%, #660033 100%);;" -->\n    <div class="striff">\n      <img src="assets/imgs/jcom_logo.png" alt="">\n    </div>\n\n    <div class="side-row" (click)="dashpage()" menuClose>\n      <div class="ic">\n        <ion-icon name="ios-home-outline"></ion-icon>\n      </div>\n      <div class="side-option">\n        DashBoard\n      </div>\n    </div>\n\n    <div class="side-row" (click)="abour_jcom()" menuClose>\n      <div class="ic">\n        <ion-icon name="ios-information-circle-outline"></ion-icon>\n      </div>\n      <div class="side-option">\n        About JCOM\n      </div>\n    </div>\n    <div class="side-row" (click)="profilepage()" menuClose>\n      <div class="ic">\n        <ion-icon name="ios-contacts-outline"></ion-icon>\n      </div>\n      <div class="side-option">\n        Profile\n      </div>\n    </div>\n    <div class="side-row" (click)="connectpage()" menuClose>\n      <div class="ic">\n        <ion-icon name="ios-person-add"></ion-icon>\n      </div>\n      <div class="side-option">\n        Connect Entry\n      </div>\n    </div>\n    <div class="side-row" (click)="gnotepage()" menuClose>\n      <div class="ic">\n        <p class="side-rs">&#8377;</p>\n      </div>\n      <div class="side-option">\n        GNote Entry\n      </div>\n    </div>\n\n    <!-- <div class="side-row" (click)="youpage()" menuClose>\n      <div class="ic">\n        <ion-icon name="ios-people-outline"></ion-icon>\n      </div>\n      <div class="side-option">\n        You & Me Entry\n      </div>\n    </div> -->\n\n    <div class="side-row" (click)="Showcase()" menuClose>\n      <div class="ic">\n        <ion-icon name="ios-images"></ion-icon>\n      </div>\n      <div class="side-option">\n        Showcase\n      </div>\n    </div>\n\n    <div class="side-row" (click)="guestpage()" menuClose>\n      <div class="ic">\n        <ion-icon name="ios-man-outline"></ion-icon>\n      </div>\n      <div class="side-option">\n        Guest Registration\n      </div>\n    </div>\n    <div class="side-row" (click)="memberpage()" menuClose>\n      <div class="ic">\n        <ion-icon name="people"></ion-icon>\n      </div>\n      <div class="side-option">\n        JCOM Tables\n      </div>\n    </div>\n    <div class="side-row" (click)="searchpage()" menuClose>\n      <div class="ic">\n        <ion-icon name="search"></ion-icon>\n      </div>\n      <div class="side-option">\n        Search Members\n      </div>\n    </div>\n\n    <!-- <div class="side-row" (click)="attendance()" menuClose>\n      <div class="ic">\n        <ion-icon name="ios-barcode"></ion-icon>\n      </div>\n      <div class="side-option">\n        Attendance\n      </div>\n    </div>\n    <div class="side-row" (click)="attendanceHistory()" menuClose>\n      <div class="ic">\n        <ion-icon name="ios-calendar"></ion-icon>\n      </div>\n      <div class="side-option">\n        Attendance History\n      </div>\n    </div> -->\n\n    <div class="side-row" (click)="app_share()" menuClose>\n      <div class="ic">\n        <ion-icon name="ios-share"></ion-icon>\n      </div>\n      <div class="side-option">\n        Share\n      </div>\n    </div>\n\n\n    <div class="side-fot">\n      <p class="account">{{member_name}}</p>\n      <button ion-button (click)="logout()" menuClose >Log Out</button>\n      <p (click)="changepsw()" menuClose >Change Password</p>\n    </div>\n\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n<!-- <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list> -->\n\n<!-- <ion-item>\n      <button menuClose ion-item (click)="openPage(p)">\n        <ion-icon name="add-circle"></ion-icon>Dashboard\n      </button>\n    </ion-item> -->\n\n<!-- <ion-toolbar>\n      <ion-title>JC IN BUSINESS</ion-title>\n    </ion-toolbar> -->'/*ion-inline-end:"/Users/neophron/jcomApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_23__providers_objects_objects__["a" /* ObjectsProvider */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_market__["a" /* Market */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export components */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expandable_header_expandable_header__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var components = [
    __WEBPACK_IMPORTED_MODULE_2__expandable_header_expandable_header__["a" /* ExpandableHeader */],
];
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [components],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"]],
            exports: [components]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableHeader = /** @class */ (function () {
    function ExpandableHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ExpandableHeader.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ExpandableHeader.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
            for (var _i = 0, _a = _this.element.nativeElement.children; _i < _a.length; _i++) {
                var headerElement = _a[_i];
                var totalHeight = headerElement.offsetTop + headerElement.clientHeight;
                if (totalHeight > _this.newHeaderHeight && !headerElement.isHidden) {
                    headerElement.isHidden = true;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0');
                }
                else if (totalHeight <= _this.newHeaderHeight && headerElement.isHidden) {
                    headerElement.isHidden = false;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0.7');
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('scrollArea'),
        __metadata("design:type", Object)
    ], ExpandableHeader.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('headerHeight'),
        __metadata("design:type", Number)
    ], ExpandableHeader.prototype, "headerHeight", void 0);
    ExpandableHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'expandable-header',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/components/expandable-header/expandable-header.html"*/'<ng-content></ng-content>\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/components/expandable-header/expandable-header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ExpandableHeader);
    return ExpandableHeader;
}());

//# sourceMappingURL=expandable-header.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gnote_gnote__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConnectMemberPage = /** @class */ (function () {
    function ConnectMemberPage(navCtrl, loadingController, toastController, alertCtrl, http, storage, navParams) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.storage = storage;
        this.navParams = navParams;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.to_id = this.navParams.get("data");
        console.log("Member Id 2:", this.to_id);
    }
    ConnectMemberPage.prototype.ionViewDidLoad = function () {
        console.log('ConnectMemberPage');
        this.load();
    };
    ConnectMemberPage.prototype.load = function () {
        var _this = this;
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id + "&to_member_id=" + _this.to_id, type = "application/x-www-form-urlencoded; charset=UTF-8", 
            // headers: any = new Headers({ 'Content-Type': type }),
            url = _this.baseURI + "get_connect_member.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.connectlist = data;
                console.log("Connect Member Data : ", _this.connectlist);
            });
        });
    };
    ConnectMemberPage.prototype.onChangeHandler = function (event) {
        console.log("select event", event);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__gnote_gnote__["a" /* GnotePage */], { data: event });
    };
    ConnectMemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-connect-member',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/connect-member/connect-member.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Connect Member</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n  <ion-list radio-group (ionChange)="onChangeHandler($event)">\n\n\n    <div *ngFor="let item of connectlist">\n\n      <div class="flex">\n      \n        <div class="left">\n          <div class="third">\n            <ion-label>{{item.connect_name}}</ion-label>\n            <span>\n              <ion-label>{{item.created_on}}</ion-label>\n            </span>\n          </div>\n          <ion-label>{{item.business_category}}</ion-label>\n        </div>\n\n        <div class="right">\n            <ion-radio value="{{item.connect_id}}"></ion-radio>\n          </div>\n\n      </div>\n    </div>\n\n\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/connect-member/connect-member.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ConnectMemberPage);
    return ConnectMemberPage;
}());

//# sourceMappingURL=connect-member.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgetmodel_forgetmodel__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, platform, menuCtrl, alertCtrl, loadingController, toastController, navParams, storage, http, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.meeting_type = [];
        this.menuCtrl.enable(false);
        platform.registerBackButtonAction(function () {
            _this.platform.exitApp();
        }, 0);
        this.load();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.load = function () {
        var _this = this;
        var loading = this.loadingController.create({});
        loading.present();
        var type1 = "application/x-www-form-urlencoded; charset=UTF-8", url1 = this.baseURI + "get_meeting_type.php";
        this.http.get(url1).map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log("get_zone data :", data1);
            _this.meeting_type = data1;
            _this.registration = localStorage.getItem("registration");
            // alert("Login Reg:"+this.registration);
            loading.dismiss();
        });
    };
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.number == null) {
            var toast = this.toastController.create({
                message: 'Enter the User Name',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.password == null) {
            var toast = this.toastController.create({
                message: 'Enter the Password',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.meetingType == null) {
            var toast = this.toastController.create({
                message: 'Choose The Meeting Type',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else {
            console.log("Number : ", this.number);
            console.log("Password : ", this.password);
            var loading_1 = this.loadingController.create({});
            loading_1.present();
            var body = "?username=" + this.number + "&password=" + this.password + "&meeting_type=" + this.meetingType, type = "application/x-www-form-urlencoded; charset=UTF-8", 
            // headers: any = new Headers({ 'Content-Type': type }),
            url = this.baseURI + "login.php" + body;
            this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data[0].m_id > 0) {
                    console.log("Result :", data);
                    console.log("M_ID :", data[0].m_id);
                    console.log("Name :", data[0].m_name);
                    console.log("Message :", data[0].message);
                    console.log("email :", data[0].m_email_id);
                    console.log("tableId :", data[0].jib_table);
                    _this.storage.set('jibmid', data[0].m_id);
                    _this.storage.set('jibname', data[0].m_name);
                    _this.storage.set('jibnum', data[0].m_mobile);
                    _this.storage.set('jibmail', data[0].m_email_id);
                    _this.storage.set('jib_table', data[0].jib_table);
                    console.log("OK");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    loading_1.dismiss();
                }
                if (data[0].m_id == 0) {
                    var toast = _this.toastController.create({
                        message: 'Invalid Username Or Password',
                        position: 'bottom',
                        duration: 2000
                    });
                    toast.present();
                    loading_1.dismiss();
                }
            });
        }
    };
    LoginPage.prototype.forget = function () {
        var _this = this;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__forgetmodel_forgetmodel__["a" /* ForgetmodelPage */]);
        myModal.onDidDismiss(function (data) {
            _this.load();
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
    };
    LoginPage.prototype.forgetsend = function (num) {
        var _this = this;
        console.log("Num1 : ", num);
        var loading = this.loadingController.create({});
        loading.present();
        var body = "?mobile_no=" + num, type = "application/x-www-form-urlencoded; charset=UTF-8", url = this.baseURI + "forget_password.php" + body;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            var toast = _this.toastController.create({
                message: data[0].message,
                position: 'bottom',
                duration: 6000
            });
            toast.present();
            loading.dismiss();
        });
    };
    LoginPage.prototype.reg = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/login/login.html"*/'<ion-content>\n\n  <div class="outer">\n    <div class="middle">\n      <div class="inner">\n\n        <div class="center-div" text-center>\n          <div class="main-logo">\n            <img src="assets/imgs/jcom_logo.png" alt="">\n          </div>\n\n          <ion-list>\n\n            <ion-item>\n              <ion-label>\n                <ion-icon name="ios-call"></ion-icon>\n              </ion-label>\n              <ion-input type="tel" placeholder="Mobile Number" [(ngModel)]="number" pattern="[0-9]*" maxlength="10">\n              </ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>\n                <ion-icon name="ios-key"></ion-icon>\n              </ion-label>\n              <ion-input [type]="passwordType" placeholder="Enter Password" [(ngModel)]="password" maxlength="20"></ion-input>\n              <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (click)=\'hideShowPassword()\'></ion-icon>\n            </ion-item>\n\n            <ion-item>\n              <ion-label style="width: 35px !important;">\n                <ion-icon name="ios-contacts"></ion-icon>\n              </ion-label>\n              <ion-select placeholder="Meeting Type" [(ngModel)]="meetingType">\n                <div *ngFor="let data of meeting_type">\n                  <ion-option value="{{data.meeting_type}}">{{data.meeting_type_name}}</ion-option>\n                </div>\n              </ion-select>\n            </ion-item>\n\n          </ion-list>\n\n          <div class="login-button">\n            <button (click)="login()" ion-button>Login</button>\n          </div>\n        </div>\n\n        <p (click)="forget()" style="text-align: center;">Forget Password</p>\n        <p *ngIf="registration == 1"  class="nav">Don\'t have an account?</p>\n\n        <div *ngIf="registration == 1" class="login-button">\n          <button (click)="reg()" ion-button>Signup Now</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GnotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hgnote_hgnote__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modelconnectmember_modelconnectmember__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Port = /** @class */ (function () {
    function Port() {
    }
    return Port;
}());
var GnotePage = /** @class */ (function () {
    function GnotePage(navCtrl, modalCtrl, loadingController, toastController, alertCtrl, http, storage, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.storage = storage;
        this.navParams = navParams;
        this.baseURI = "https://admin.jcombiz.com/jcom/";
        this.memberslist = [];
        this.buisnessdata = [];
        this.connectmember = this.navParams.get("data");
        console.log("Connect Member ID :", this.connectmember);
        this.connectmember = "Click To Choose The Connect";
    }
    GnotePage.prototype.ionViewDidLoad = function () {
        console.log('GnotePage');
        this.load();
        this.getTables();
    };
    GnotePage.prototype.getTables = function () {
        var _this = this;
        var url = this.baseURI + "get_jcom_table.php";
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("Business data :", data);
            _this.tables = data;
            var _loop_1 = function (i) {
                _this.storage.get('jib_table').then(function (tableId) {
                    if (tableId == i.table) {
                        _this.table = i;
                    }
                });
            };
            for (var _i = 0, _a = _this.tables; _i < _a.length; _i++) {
                var i = _a[_i];
                _loop_1(i);
            }
        });
    };
    GnotePage.prototype.load = function () {
        var _this = this;
        this.storage.get('jib_table').then(function (tableId) {
            var table_id = tableId;
            _this.storage.get('jibmid').then(function (val) {
                var m_id = val;
                var body = "?m_id=" + m_id + "&table_id=" + table_id, type = "application/x-www-form-urlencoded; charset=UTF-8", 
                // headers: any = new Headers({ 'Content-Type': type }),
                url = _this.baseURI + "get_member_list.php" + body;
                _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.memberslist = data;
                    console.log("Members data :", _this.memberslist);
                });
            });
        });
        var url = this.baseURI + "get_business_category.php";
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("Business data :", data);
            _this.buisnessdata = data;
        });
    };
    GnotePage.prototype.loadTable = function (ev) {
        var _this = this;
        console.log({ ev: ev }, this.table);
        this.storage.get('jibmid').then(function (val) {
            var m_id = val;
            var body = "?m_id=" + m_id + "&table_id=" + _this.table.table, type = "application/x-www-form-urlencoded; charset=UTF-8", 
            // headers: any = new Headers({ 'Content-Type': type }),
            url = _this.baseURI + "get_member_list.php" + body;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.memberslist = data;
                console.log("Members data :", _this.memberslist);
                _this.member = null;
                _this.connectmember = "Click To Choose The Connect";
                _this.buisness = null;
            });
        });
    };
    GnotePage.prototype.connect_member_page = function () {
        var _this = this;
        if (this.member == null || this.member == undefined) {
            var toast = this.toastController.create({
                message: 'Please Select the member',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
            console.log("Please select the member");
        }
        else {
            console.log("Member Id 1:", this.member.id);
            var chooseModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modelconnectmember_modelconnectmember__["a" /* ModelconnectmemberPage */], { data: this.member.id }, { cssClass: 'inset-modal' });
            chooseModal.onDidDismiss(function (data) {
                if (data != null) {
                    console.log("From Model Connet id", data);
                    _this.connectmember = data['connect_name'];
                    _this.connect_id = data['connect_id'];
                    _this.b_category = data['b_category'];
                    _this.business_category = data['business_category'];
                    _this.buisness = { category: _this.business_category, id: _this.b_category };
                    _this.connect_type = data['connect_type'];
                    // this.connect_id = data[0];
                    // this.connect_id = data[0];
                    console.log("From Model to page Connet Member", _this.connectmember);
                    console.log("From Model to page Connet id", _this.buisness);
                }
                else {
                    console.log("Connect Member is not Selected");
                }
            });
            chooseModal.present();
        }
    };
    GnotePage.prototype.business_change = function (ev) {
        console.log({ ev: ev }, this.buisness);
    };
    GnotePage.prototype.confirm = function () {
        var _this = this;
        if (this.member == null) {
            var toast = this.toastController.create({
                message: 'Choose the Member',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.connect_id == null || this.connect_id == undefined) {
            var toast = this.toastController.create({
                message: 'Choose the Connect Member',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.member == undefined) {
            var toast = this.toastController.create({
                message: 'Choose the Member',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.amount == null) {
            var toast = this.toastController.create({
                message: 'Fill the amount',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.amount < 1) {
            var toast = this.toastController.create({
                message: 'Fill the Minmum amount',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.btype == null) {
            var toast = this.toastController.create({
                message: 'Choose the Business Type',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.ctype == null) {
            var toast = this.toastController.create({
                message: 'Choose the Connect Type',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.buisness == null) {
            var toast = this.toastController.create({
                message: 'Choose the Buisness Category',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.buisness == undefined) {
            var toast = this.toastController.create({
                message: 'Choose the Buisness Category',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else if (this.comment == null) {
            var toast = this.toastController.create({
                message: 'Fill the Comments',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        }
        else {
            this.storage.get('jibmid').then(function (val) {
                var m_id = val;
                var loading = _this.loadingController.create({
                // message: "Hellooo",
                });
                loading.present();
                console.log("Member :", _this.member.id);
                console.log("amount :", _this.amount);
                console.log("Business Type :", _this.btype);
                console.log("Connect Type :", _this.ctype);
                console.log("business :", _this.buisness.id);
                console.log("comment :", _this.comment);
                var body = "?m_id=" + m_id + "&to_member_id=" + _this.member.id + "&business_type=" + _this.btype + "&connect_type="
                    + _this.ctype + "&amount=" + _this.amount + "&business_category=" + _this.buisness.id + "&comments=" + _this.comment + "&connect_id=" + _this.connect_id, type = "application/x-www-form-urlencoded; charset=UTF-8", 
                // headers: any = new Headers({ 'Content-Type': type }),
                url = _this.baseURI + "send_gnote.php";
                var data = {
                    m_id: m_id,
                    to_member_id: _this.member.id,
                    business_type: _this.btype,
                    connect_type: _this.ctype,
                    amount: _this.amount,
                    business_category: _this.business_category.id,
                    comments: _this.comment,
                    connect_id: _this.connect_id
                };
                _this.http.post(url, data).map(function (res) { return res.json(); }).subscribe(function (data) {
                    console.log("Result :", data);
                    if (data[0].status == "success") {
                        _this.toast();
                        loading.dismiss();
                    }
                });
            });
        }
    };
    GnotePage.prototype.toast = function () {
        this.member = null;
        this.amount = null;
        this.btype = null;
        this.ctype = null;
        this.buisness = null;
        this.comment = null;
        var alert = this.alertCtrl.create({
            title: 'Success',
            buttons: ['OK']
        });
        alert.present();
    };
    GnotePage.prototype.clear = function () {
        this.member = null;
        this.amount = null;
        this.btype = null;
        this.ctype = null;
        this.buisness = null;
        this.comment = null;
    };
    GnotePage.prototype.hconnect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__hgnote_hgnote__["a" /* HgnotePage */]);
    };
    GnotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gnote',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/gnote/gnote.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>GNote Entry</ion-title>\n    <div class="ic" (click)="hconnect()">\n      <ion-icon name="list-box"></ion-icon>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div class="rows">\n    <div class="lab">\n      <ion-icon name="albums"></ion-icon>\n    </div>\n    <div class="inp">\n      <select-searchable class="uplo" item-content placeholder="Select Table " [(ngModel)]="table" [items]="tables"\n        itemValueField="table" itemTextField="table_name"  (onChange)="loadTable($event)" [canSearch]="true">\n      </select-searchable>\n    </div>\n  </div>\n\n  <div class="rows">\n    <div class="lab">\n      <ion-icon name="person-add"></ion-icon>\n    </div>\n    <div class="inp">\n      <select-searchable class="uplo" item-content placeholder="GNote To " [(ngModel)]="member" [items]="memberslist"\n        itemValueField="id" itemTextField="name" [canSearch]="true">\n      </select-searchable>\n    </div>\n  </div>\n\n  <div class="rows" (click)="connect_member_page()">\n    <div class="lab">\n      <ion-icon name="contact"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item>\n        <!-- <ion-input type="text" placeholder="Connect Member" [(ngModel)]="connectmember"></ion-input> -->\n        <p style="color: white">{{connectmember}}</p>\n      </ion-item>\n    </div>\n  </div>\n\n  <div class="rows">\n    <div class="lab">\n      <ion-icon name="ios-cash"></ion-icon>\n    </div>\n    <div class="inp">\n      <ion-item>\n        <ion-input type="number" placeholder="Amount" [(ngModel)]="amount"></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <p class="label">Business Type</p>\n  <div class="flex">\n    <ion-row class="radio-btn" radio-group [(ngModel)]="btype">\n      <ion-col>\n        <ion-item>\n          <ion-label>First Business</ion-label>\n          <ion-radio value="1"></ion-radio>\n        </ion-item>\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <ion-label leb>Regular Business</ion-label>\n          <ion-radio value="2"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <p class="label">Connect Type</p>\n  <!-- <div class="flex"> -->\n    <ion-row class="radio-btn" radio-group [(ngModel)]="ctype">\n  <div class="flex">\n\n      <ion-col>\n        <ion-item>\n          <ion-label>JCOM</ion-label>\n          <ion-radio value="1"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>JCI</ion-label>\n          <ion-radio value="2"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Non-JCI</ion-label>\n          <ion-radio value="3"></ion-radio>\n        </ion-item>\n      </ion-col>\n      </div>\n    </ion-row>\n  <!-- </div> -->\n\n  <div class="rows">\n    <div class="lab">\n      <ion-icon name="ios-briefcase"></ion-icon>\n    </div>\n    <div class="inp">\n      <select-searchable class="uplo" item-content placeholder="Business Category" [(ngModel)]="buisness"\n        [items]="buisnessdata" itemValueField="id" (onChange)="business_change($event)"  itemTextField="category" [canSearch]="true">\n      </select-searchable>\n    </div>\n  </div>\n\n  <div class="comment">\n    <ion-item>\n      <ion-textarea placeholder="comments" [(ngModel)]="comment">\n      </ion-textarea>\n    </ion-item>\n  </div>\n\n  <div class="conf-btn">\n    <button ion-button (click)="confirm()">\n      Confirm\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/gnote/gnote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], GnotePage);
    return GnotePage;
}());

//# sourceMappingURL=gnote.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelmemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModelmemberPage = /** @class */ (function () {
    function ModelmemberPage(navCtrl, viewCtrl, callNumber, params) {
        // bc,mn,email,web,con,state,zone,city,lom,  jt,add,dis,pin,dp,bi,bk,pro,nc
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.callNumber = callNumber;
        this.params = params;
        this.bc = this.params.get("data");
        this.mn = this.params.get("data1");
        this.email = this.params.get("data2");
        this.web = this.params.get("data3");
        this.con = this.params.get("data4");
        this.state = this.params.get("data5");
        this.zone = this.params.get("data6");
        this.city = this.params.get("data7");
        this.lom = this.params.get("data8");
        this.jt = this.params.get("data9");
        this.add = this.params.get("data10");
        this.dis = this.params.get("data11");
        this.pin = this.params.get("data12");
        this.dp = this.params.get("data13");
        this.bi = this.params.get("data14");
        this.bk = this.params.get("data15");
        this.pro = this.params.get("data16");
        this.nc = this.params.get("data17");
        this.name = this.params.get("data18");
        this.bn = this.params.get("data19");
        console.log("name :", this.name);
        console.log("BN :", this.bn);
    }
    ModelmemberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Model-MemberPage');
    };
    ModelmemberPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModelmemberPage.prototype.call = function (number) {
        console.log("number :", number);
        this.callNumber.callNumber(number, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return alert(err); });
    };
    ModelmemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modelmember',template:/*ion-inline-start:"/Users/neophron/jcomApp/src/pages/modelmember/modelmember.html"*/'<ion-content>\n  <div class="connect">\n    <div class="img">\n      <img src="https://admin.jcombiz.com/{{dp}}">\n    </div>\n    <div class="row">\n      <p class="left">Name  </p>\n      <p class="right">{{name}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left">Business Name  </p>\n      <p class="right">{{bn}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left">Business Category  </p>\n      <p class="right">{{bc}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left">Business Info  </p>\n      <p class="right">{{bi}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left">Business Keyword  </p>\n      <p class="right">{{bk}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Website  </p>\n      <p class="right">{{web}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Email  </p>\n      <p class="right">{{email}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left">  Mobile  </p>\n      <p class="right">{{mn}} <span> <ion-icon name="ios-call" (click)="call(mn)"></ion-icon> </span></p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Address  </p>\n      <p class="right">{{add}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> City  </p>\n      <p class="right">{{city}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> District  </p>\n      <p class="right">{{dis}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> State  </p>\n      <p class="right">{{state}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Country  </p>\n      <p class="right">{{con}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Pincode  </p>\n      <p class="right">{{pin}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> JCOM Table  </p>\n      <p class="right">{{jt}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> LOM  </p>\n      <p class="right">{{lom}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Zone  </p>\n      <p class="right">{{zone}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Products  </p>\n      <p class="right">{{pro}}</p>\n    </div>\n    <hr>\n    <div class="row">\n      <p class="left"> Needed Contacts  </p>\n      <p class="right">{{nc}}</p>\n    </div>\n   \n  </div>\n</ion-content>\n\n<ion-footer>\n  <button ion-button full (click)="dismiss()">Close\n  </button>\n</ion-footer>'/*ion-inline-end:"/Users/neophron/jcomApp/src/pages/modelmember/modelmember.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ModelmemberPage);
    return ModelmemberPage;
}());

//# sourceMappingURL=modelmember.js.map

/***/ })

},[246]);
//# sourceMappingURL=main.js.map