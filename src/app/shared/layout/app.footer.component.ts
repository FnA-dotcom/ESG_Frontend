import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppComponent } from 'src/app/app.component';
import * as fromStore from '../login/store/store';

@Component({
  selector: 'app-footer',
  templateUrl: './app.footer.component.html'
})
export class AppFooterComponent implements OnInit {
  
  facility: any;
  
  constructor(public app: AppComponent,  private store: Store<fromStore.LoginState>) {}
  
  
    ngOnInit(): void {
      this.store.select<any>(fromStore.getselectedFacility).subscribe(
        facility => {
        this.facility = facility;
  });
  }
}
