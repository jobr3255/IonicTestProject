import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

/**
 * Generated class for the Record2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-record2',
  templateUrl: 'record2.html',
})
export class Record2Page {

  recording: boolean = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];

  constructor(public navCtrl: NavController,
              private media: Media,
              private file: File,
              public platform: Platform) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Record2Page');
  }

  ionViewWillEnter() {
    this.getAudioList();
  }

  getAudioList() {
    if(localStorage.getItem("audiolist")) {
      this.audioList = JSON.parse(localStorage.getItem("audiolist"));
    }
  }

  testFile1() {
    var name = "test_"+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds();
    this.fileName = name+'.txt';
    //console.log(this.fileName);
    /*
    var name = "tetsfile";
    //this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
    this.filePath = this.file.applicationStorageDirectory.replace(/file:\/\//g, '')+this.fileName;
    this.media.create(this.filePath);
    console.log("created "+this.filePath);
    this.filePath = this.file.dataDirectory.replace(/file:\/\//g, '')+this.fileName;
    this.media.create(this.filePath);
    console.log("created "+this.filePath);
    */
    /*
    if(this.file.checkFile(this.file.applicationStorageDirectory.replace(/file:\/\//g, ''), "testfile.txt")){
      console.log("testfile found in "+this.file.applicationStorageDirectory.replace(/file:\/\//g, ''));
    }else if(this.file.checkFile(this.file.dataDirectory.replace(/file:\/\//g, ''), "testfile.txt")){
      console.log("testfile found in "+this.file.dataDirectory.replace(/file:\/\//g, ''));
    }else{
      console.log("testfile not found");
    }*/

    // This saves correctly and can be accessed after the phone has been restarted
    this.filePath = this.file.externalDataDirectory+this.fileName;
    //this.file.createFile(this.file.externalDataDirectory, this.fileName, false);
    //this.findFolder(this.file.externalDataDirectory, "recordings");
    if(!this.findFolder("file:///storage/emulated/0/", "IonicFiles")){
      this.createFolder("file:///storage/emulated/0/", "IonicFiles");
    }


    //console.log("externalApplicationStorageDirectory "+this.file.externalApplicationStorageDirectory);
    //console.log("externalDataDirectory"+this.file.externalDataDirectory);
    //console.log("created "+this.filePath);
  }


  testFile2() {
    this.audio.release();
  }

  testFile3() {
    var name = "test_"+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds();
    this.fileName = name+'.txt';
    this.writeFile("file:///storage/emulated/0/IonicFiles", this.fileName, "hey look at that");
  }

  writeFile(path, file, data){
    this.file.writeFile(path, file, data)
      .then(function (success) {
        // success
        console.log("success");
        if(success){
          console.log(path+file+" written");
        }else{
          console.log(path+file+" not written");
        }
      }, function (error) {
        // error
        console.log("an error occured trying to written "+path+file);
        console.error(error.message);
      });
  }

  writeExistingFile(path, file, data){
    this.file.writeExistingFile(path, file, data)
      .then(function (success) {
        // success
        console.log("success");
        if(success){
          console.log(path+file+" written");
        }else{
          console.log(path+file+" not written");
        }
      }, function (error) {
        // error
        console.log("an error occured trying to written "+path+file);
        console.error(error.message);
      });
  }

  createFile(path, file){
    this.file.createFile(path, file, true)
      .then(function (success) {
        // success
        console.log("success");
        if(success){
          console.log(path+file+" created");
        }else{
          console.log(path+file+" not created");
        }
      }, function (error) {
        // error
        console.log("an error occured trying to create "+path+file);
        console.error(error.message);
      });
  }

  createFolder(path, folder){
    this.file.createDir(path, folder, true)
      .then(function (success) {
        // success
        console.log("success");
        if(success){
          console.log(path+folder+" created");
        }else{
          console.log(path+folder+" not created");
        }
      }, function (error) {
        // error
        console.log("an error occured trying to create "+path+folder);
        console.error(error.message);
      });
  }

  findFolder(path, folder){
    this.file.checkDir(path, folder)
      .then(function (success) {
        // success
        console.log("success");
        if(success){
          console.log(path+folder+" found");
          return true;
        }else{
          console.log(path+folder+" not found");
          return false;
        }
      }, function (error) {
        // error
        console.log("an error occured trying to find "+path+folder);
        console.error(error.message);
      });
  }

  startRecord() {
    if (this.platform.is('ios')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.mp3';
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.mp3';
      //this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      //this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '')+this.fileName;
      this.writeFile("file:///storage/emulated/0/IonicFiles/", this.fileName, "");
      this.filePath = "file:///storage/emulated/0/IonicFiles/"+this.fileName;
      this.audio = this.media.create(this.filePath);
    }
    //console.log("externalApplicationStorageDirectory "+this.file.externalApplicationStorageDirectory);
    //console.log("externalDataDirectory"+this.file.externalDataDirectory);
    console.log("Start recording "+this.filePath);
    this.audio.startRecord();
    this.recording = true;
  }

  stopRecord() {
    this.audio.stopRecord();
    //this.writeExistingFile("file:///storage/emulated/0/IonicFiles/", this.fileName, this.audio);
    let data = { filename: this.fileName };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
    this.getAudioList();
  }

  playAudio(file,idx) {
    if (this.platform.is('ios')) {
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    }
    console.log("Playing audio from "+this.filePath);
    this.audio.play();
    this.audio.setVolume(0.8);
  }

}
