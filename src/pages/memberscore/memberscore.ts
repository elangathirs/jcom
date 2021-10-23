import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModelmemberscorePage } from './modelmemberscore/modelmemberscore';

@Component({
  selector: 'page-memberscore',
  templateUrl: 'memberscore.html',
})
export class MemberscorePage {
  scoredata: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams) {

    this.scoredata = this.navParams.get('data');

    console.log("Score Data In Member Score Page :", this.scoredata)
  }

  ionViewDidLoad() {
    console.log('MemberscorePage');
  }

  openModel(item) {
    console.log("item : ", item);

    let chooseModal = this.modalCtrl.create(ModelmemberscorePage, { data: item }, { cssClass: 'inset-modal' });
    chooseModal.onDidDismiss(data => {
    });
    chooseModal.present();


  }

}
