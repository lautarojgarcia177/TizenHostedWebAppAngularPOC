import { SpatialNavigationService } from './../spatial-navigation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private router: Router, private spatialNavigationService: SpatialNavigationService) { }

  ngOnInit(): void {
    document.getElementById('go').focus();
    this.spatialNavigationService.addSpatialNavigation();
  }

  goToSecondPage() {
    this.router.navigate(['second-page']);
  }

}
