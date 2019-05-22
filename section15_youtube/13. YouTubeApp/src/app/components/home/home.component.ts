import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../providers/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: any[] = [];
  selectedVideo: any;

  constructor(private youTubeService: YoutubeService) {
    this.loadVideos();
  }

  ngOnInit() {
  }

  loadVideos = () => {
    this.youTubeService.getVideos().subscribe((videos: any) => this.videos.push.apply(this.videos, videos));
  }

  viewVideo = (video: any) => {
    this.selectedVideo = video;
    $('#exampleModal').modal();
  }

  closeModal = () => {
    this.selectedVideo = null;
    $('#exampleModal').modal('hide');
  }

}
