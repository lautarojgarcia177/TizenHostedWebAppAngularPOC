import { SpatialNavigationService } from './../spatial-navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  myInput: string = '';
  sent = false;

  constructor(private spatialNavigationService: SpatialNavigationService) { }

  ngOnInit(): void {
    document.getElementById('go').focus();
    this.spatialNavigationService.addSpatialNavigation();
  }

  send() {
    this.sent = true;
  }

}
