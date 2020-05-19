import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TopRatedStoreModule } from '@features/store/top-rated/top-rated-store.module';
import { AppStoreModule } from '@shared/store/app-store.module';
import { MovieGridModule } from '@shared/ui/components/movie-grid/movie-grid.module';
import { TopRatedComponent } from './top-rated.component';

describe('TopRatedComponent', () => {
  let component: TopRatedComponent;
  let fixture: ComponentFixture<TopRatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppStoreModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MovieGridModule,
        TopRatedStoreModule
      ],
      declarations: [TopRatedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
