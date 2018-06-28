import { Injectable } from '@angular/core';

/*
  Generated class for the AudiotoggleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var AudioToggle;
@Injectable()
export class AudiotoggleProvider {

  constructor() {
    console.log('Hello AudiotoggleProvider Provider');
  }

  setSpeaker(){
  	AudioToggle.setAudioMode(AudioToggle.SPEAKER);
  }

  setHeadphone(){
  	AudioToggle.setAudioMode(AudioToggle.EARPIECE);
  }

}
