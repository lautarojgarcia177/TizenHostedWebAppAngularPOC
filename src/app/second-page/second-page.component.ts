import { SpatialNavigationService } from './../spatial-navigation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(private router: Router, private spatialNavigationService: SpatialNavigationService) { }

  ngOnInit(): void {
    this.spatialNavigationService.addSpatialNavigation();
  }

  goToThird() {
    this.router.navigate(['third-page']);
  }

}
