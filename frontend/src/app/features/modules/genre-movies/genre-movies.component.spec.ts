import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesStoreModule } from '@features/store/movies/movies-store.module';
import { AppStoreModule } from '@shared/store/app-store.module';
import { MovieBoxModule } from '@shared/ui/components/movie-box/movie-box.module';
import { MovieGridModule } from '@shared/ui/components/movie-grid/movie-grid.module';
import { GenreMoviesComponent } from './genre-movies.component';

describe('GenreMoviesComponent', () => {
  let component: GenreMoviesComponent;
  let fixture: ComponentFixture<GenreMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AppStoreModule,
        MovieBoxModule,
        MovieGridModule,
        MoviesStoreModule
      ],
      declarations: [GenreMoviesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
