import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-videoplayer',
  templateUrl: 'videoplayer.html',
})
export class VideoplayerPage {
  icono: string;
  @ViewChild('videoplayer') videoplayer: any;
  private status: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.status='play';
    this.icono = 'ios-play-outline';
  }

  ionViewDidLoad(){
  }

  toggleVideo(event: any) {
    if(this.status=='play'){
      this.videoplayer.nativeElement.play();
      /*if (this.videoplayer.nativeElement.requestFullscreen) {
        this.videoplayer.nativeElement.requestFullscreen();
      }
      else if (this.videoplayer.nativeElement.mozRequestFullScreen) {
        this.videoplayer.nativeElement.nativeElement.mozRequestFullScreen();
      }
      else if (this.videoplayer.nativeElement.webkitRequestFullScreen) {
        this.videoplayer.nativeElement.webkitRequestFullScreen();
      }*/
      this.status = 'pause';
      this.icono = 'ios-pause-outline';
    } else {
      this.videoplayer.nativeElement.pause();
      this.status = 'play';
      this.icono = 'ios-play-outline';
    }
  }

}
