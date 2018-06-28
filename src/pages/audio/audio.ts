import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AudiotoggleProvider } from '../../providers/audiotoggle/audiotoggle';

/**
 * Generated class for the AudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-audio',
  templateUrl: 'audio.html',
})
export class AudioPage {

  audio: AudiotoggleProvider = null;

  constructor(private alertCtrl: AlertController, public audiotoggle: AudiotoggleProvider) {
  	this.audio = audiotoggle;
	}

  speaker() {
	  let alert = this.alertCtrl.create({
	    title: 'Speaker',
	    subTitle: 'Audio should play through the speaker',
	    buttons: ['Dismiss']
	  });
	  this.audio.setSpeaker();
	  alert.present();
	}

	headphone() {
	  let alert = this.alertCtrl.create({
	    title: 'Headphone',
	    subTitle: 'Audio should play through the headphone',
	    buttons: ['Dismiss']
	  });
	  this.audio.setHeadphone();
	  alert.present();
	}

}
