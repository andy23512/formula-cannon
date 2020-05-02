import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SopType } from '@frontend/interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'frontend-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public sops$: Observable<SopType[]>;
  public selectedSop: SopType;
  constructor(private dataService: DataService) {}

  public ngOnInit() {
    this.sops$ = this.dataService
      .watchQueryAllData()
      .valueChanges.pipe(map(res => res.data.sops));
  }

  public selectSop(sop: SopType) {
    this.selectedSop = sop;
  }
}
