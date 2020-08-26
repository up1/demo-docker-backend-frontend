import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-app';

  weatherList: any = [];

  constructor(public demoService: DemoService){
    // Get all data
    this.demoService.GetAll().subscribe((data: {}) => {
      this.weatherList = data;
    });
  }



}
