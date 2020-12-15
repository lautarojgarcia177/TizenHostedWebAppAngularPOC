import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webOsTvAngularPoc';

  constructor(router: Router, private location: Location) {
    window.addEventListener("keydown", (inEvent) => {
      this.keyDownHandler(inEvent);
    });
  }

  ngOnInit() {

    // document.body.addEventListener('keydown', (ev) => console.log(ev));
    window.addEventListener("popstate", function(inEvent) {
    // received back, check inEvent.state if you want the data from the history push
      console.log('popstate event!!!!');
      console.log(inEvent);
    });

    //for samsung
    window.addEventListener('backBtn', () => {
      this.location.back();
    });
  }

  private keyDownHandler(inEvent) {
    switch (inEvent.keyCode) {
      case 461:
        console.log('do back');
        this.location.back();
        break;
      case 37:
        console.log('do left');
        break;
      case 38:
        console.log('do up');
        break;
      case 39:
        console.log('do right');
        break;
      case 40:
        console.log('do down');
        break;
      case 13:
        console.log('enter');
        break;
      default:
        console.error(inEvent.keyCode);
        break;
    }
  }
}
