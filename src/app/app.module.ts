import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ExpandableHeader } from '../components/expandable-header/expandable-header';
import { ComponentsModule } from '../components/components.module';
import { GnotePage } from '../pages/gnote/gnote';
import { ConnectPage } from '../pages/connect/connect';
import { YouPage } from '../pages/you/you';
import { ProfilePage } from '../pages/profile/profile';
import { GuestPage } from '../pages/guest/guest';
import { StatsmodalPage } from '../pages/home/statsmodal/statsmodal';

import { Contacts } from '@ionic-native/contacts';

import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { ProfilemodalPage } from '../pages/profile/profilemodal/profilemodal';
import { HconnectPage } from '../pages/hconnect/hconnect';
import { HgnotePage } from '../pages/hgnote/hgnote';
import { HyouPage } from '../pages/hyou/hyou';
import { ModelconnectPage } from '../pages/modelconnect/modelconnect';
import { ModelgnotePage } from '../pages/modelgnote/modelgnote';
import { ModelyouPage } from '../pages/modelyou/modelyou';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { MemberPage } from '../pages/member/member';
import { SearchPage } from '../pages/search/search';
import { ViewMemberPage } from '../pages/view-member/view-member';
import { ModelmemberPage } from '../pages/modelmember/modelmember';
import { CallNumber } from '@ionic-native/call-number';
import { ConnectMemberPage } from '../pages/connect-member/connect-member';
import { ModelconnectmemberPage } from '../pages/gnote/modelconnectmember/modelconnectmember';
import { MemberscorePage } from '../pages/memberscore/memberscore';
import { ModelmemberscorePage } from '../pages/memberscore/modelmemberscore/modelmemberscore';
import { RegisterPage } from '../pages/register/register';
import { ShowcasePage } from '../pages/showcase/showcase';
import { AboutJcomPage } from '../pages/about-jcom/about-jcom';


import { SocialSharing } from '@ionic-native/social-sharing';
import { QRScanner } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HguestPage } from '../pages/hguest/hguest';
import { HshowPage } from '../pages/hshow/hshow';

import { Geolocation } from '@ionic-native/geolocation';
import { SearchKeyPage } from '../pages/search-key/search-key';
import { PconnectPage } from '../pages/pconnect/pconnect';
import { HattendancePage } from '../pages/hattendance/hattendance';
import { Crop } from '@ionic-native/crop';
import { Base64 } from '@ionic-native/base64/ngx';
import { File } from '@ionic-native/file';
import { TermsPage } from '../pages/terms/terms';
import { ObjectsProvider } from '../providers/objects/objects';
import { ForgetmodelPage } from '../pages/login/forgetmodel/forgetmodel';
import { FilePath } from '@ionic-native/file-path';

import { Market } from '@ionic-native/market';
import { AppVersion } from '@ionic-native/app-version';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    StatsmodalPage,

    GnotePage,ConnectPage,YouPage,ProfilePage,GuestPage,StatsmodalPage,
    ProfilemodalPage,HconnectPage,HgnotePage,HyouPage,ModelconnectPage,ModelgnotePage,ModelyouPage,MemberPage,SearchPage,ViewMemberPage,
    ModelmemberPage,
    ModelconnectmemberPage,
    ConnectMemberPage,
    MemberscorePage,
    ModelmemberscorePage,
    RegisterPage,
    ShowcasePage,
    AboutJcomPage,
    HguestPage,
    HshowPage,
    SearchKeyPage,
    PconnectPage,
    HattendancePage,
    TermsPage,
    ForgetmodelPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicStorageModule.forRoot(),
    HttpModule,
    SelectSearchableModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      mode: 'ios'
  }),
  ],
  exports: [
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    StatsmodalPage,

    GnotePage,ConnectPage,YouPage,ProfilePage,GuestPage,StatsmodalPage,
    ProfilemodalPage,HconnectPage,HgnotePage,HyouPage,ModelconnectPage,ModelgnotePage,ModelyouPage,MemberPage,SearchPage,ViewMemberPage,
    ModelmemberPage,
    ModelconnectmemberPage,
    ConnectMemberPage,
    MemberscorePage,
    ModelmemberscorePage,
    RegisterPage,
    ShowcasePage,
    AboutJcomPage,
    HguestPage,
    HshowPage,
    SearchKeyPage,
    PconnectPage,
    HattendancePage,
    TermsPage,
    ForgetmodelPage

  ],
  providers: [
    StatusBar,
    HttpClient,
    CallNumber,
    Camera,
    SocialSharing,
    QRScanner,
    BarcodeScanner,
    SplashScreen,
    Contacts,
    Geolocation,
    Crop,
    Base64,
    File,
    ObjectsProvider,
    FilePath,
    Market,
    AppVersion,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ObjectsProvider
  ]
})
export class AppModule {}
