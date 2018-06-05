import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movie } from '../../providers/movie/movie';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-videoplayer',
  templateUrl: 'videoplayer.html',
})
export class VideoplayerPage implements OnInit{
  trustedUrl: SafeUrl;
  videoOut: boolean;
  icono: string;
  movie: Movie;
  video;

  @ViewChild('videoplayer') videoplayer: any;
  private status: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.status='play';
    this.icono = 'ios-play-outline';
    this.movie = navParams.data['movie'];
    this.video = navParams.data['video'];
  }

 ngOnInit(){
  this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.video);
  console.log(this.trustedUrl);
 }

  toggleVideo(event: any) {
    if(this.status=='play'){
      this.videoOut=false;
      this.playPause();
      this.status = 'pause';
    } else {
      this.playPause();
      this.status = 'play';
    }
  }

  playPause(){
    if(this.status==='play'){
      this.videoplayer.nativeElement.play();
      if (this.videoplayer.nativeElement.requestFullscreen) {
        this.videoplayer.nativeElement.requestFullscreen();
      }
      else if (this.videoplayer.nativeElement.mozRequestFullScreen) {
        this.videoplayer.nativeElement.nativeElement.mozRequestFullScreen();
      }
      else if (this.videoplayer.nativeElement.webkitRequestFullScreen) {
        this.videoplayer.nativeElement.webkitRequestFullScreen();
      }
    }else{
      this.videoplayer.nativeElement.pause();
    }
    
  }

}
