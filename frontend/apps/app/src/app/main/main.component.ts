import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SopType, SopItemType } from '@frontend/interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { SopCheckState, SopCheckStateModel } from '../state/sop-check.state';
import { MatCheckboxChange } from '@angular/material';
import { SetSopCheck, UncheckAll } from '../state/sop-check.actions';

@Component({
  selector: 'frontend-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public sops$: Observable<SopType[]>;
  public selectedSop: SopType;
  @Select(SopCheckState) public sopCheckState$: Observable<SopCheckStateModel>;
  constructor(private dataService: DataService, private store: Store) {}

  public ngOnInit() {
    this.sops$ = this.dataService
      .watchQueryAllData()
      .valueChanges.pipe(map(res => res.data.sops));
  }

  public selectSop(sop: SopType) {
    this.selectedSop = sop;
  }

  public onCheckChanged(
    event: MatCheckboxChange,
    sop: SopType,
    sopItem: SopItemType
  ) {
    this.store.dispatch(new SetSopCheck(sop.id, sopItem.id, event.checked));
  }

  public uncheckAll(sop: SopType) {
    this.store.dispatch(new UncheckAll(sop.id));
  }
}
