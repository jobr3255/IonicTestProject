import { Injectable } from '@angular/core';

/*
  Generated class for the MediaCaptureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var Capture;
@Injectable()
export class MediaCaptureProvider {

  constructor() {
    console.log('Hello MediaCaptureProvider Provider');
  }

}
