import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private dataService: DataService) {}

  public ngOnInit() {
    this.dataService.watchQueryAllData().valueChanges.subscribe(console.log);
  }
}
