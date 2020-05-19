import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnvironmentService } from '@environments/environment.service';
import { Store } from '@ngrx/store';
import * as routerSelectors from '@shared/store/router/router.selectors';
import { getRouterQueryParams } from '@shared/store/router/router.selectors';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.scss']
})
export class NavarComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  logoUrl: string = this.environmentService.assets.logo;

  searchForm: FormGroup = this.fb.group({
    term: this.fb.control('', [Validators.required])
  });

  constructor(
    private environmentService: EnvironmentService,
    private routerStore: Store<routerSelectors.State>,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initSubscription();
  }

  onSearch(): void {
    this.router.navigate(['movies'], {
      queryParams: {
        q: this.searchForm.value.term
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initSubscription() {
    this.routerStore
      .select(getRouterQueryParams)
      .pipe(
        filter((value) => value != null),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((queryParams) => {
        this.searchForm.patchValue({ term: queryParams.q });
      });
  }
}
