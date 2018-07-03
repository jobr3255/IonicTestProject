import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AudioPage } from '../pages/audio/audio';
import { RecordPage } from '../pages/record/record';
import { InputPage } from '../pages/input/input';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AudiotoggleProvider } from '../providers/audiotoggle/audiotoggle';
import { MediaCaptureProvider } from '../providers/media-capture/media-capture';

import { MediaCapture } from '@ionic-native/media-capture';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AudioPage,
    RecordPage,
    InputPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AudioPage,
    RecordPage,
    InputPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AudiotoggleProvider,
    MediaCaptureProvider,
    MediaCapture,
    Media,
    File
  ]
})
export class AppModule {}
