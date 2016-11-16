import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
})
export class TopContentComponent implements OnInit {

    play: boolean = false;
    mediaURL: string = "https://s-media-cache-ak0.pinimg.com/originals/30/9b/55/309b55739a7a2d20a9de4498ee1de059.jpg";

    constructor() { }

    playMovie() {
        this.play = true;
    }

    chooseMedia (media) {
      if (media === 'photo') {
        this.mediaURL = "https://s-media-cache-ak0.pinimg.com/originals/30/9b/55/309b55739a7a2d20a9de4498ee1de059.jpg";
      } else if (media === 'photo2') {
        this.mediaURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Treble_a.svg/1280px-Treble_a.svg.png";
      } else if (media === 'photo3') {
        this.mediaURL = "https://www.joytunes.com/images/misc/shutter/pianobeginner.jpg"; 
      } else if (media === 'photo4') {
        this.mediaURL = "https://i.ytimg.com/vi/9E6_cHecTZs/maxresdefault.jpg";
      } 
      // else if () {
      //   this.mediaURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Treble_a.svg/1280px-Treble_a.svg.png"
      // }
    }

  ngOnInit() {
  }

}
