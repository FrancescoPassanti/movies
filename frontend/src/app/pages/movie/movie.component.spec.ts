import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GenreMoviesModule } from '@features/modules/genre-movies/genre-movies.module';
import { MoviesStoreModule } from '@features/store/movies/movies-store.module';
import { AppStoreModule } from '@shared/store/app-store.module';
import { NotFoundModule } from '@shared/ui/layout/not-found/not-found.module';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppStoreModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MovieRoutingModule,
        MoviesStoreModule,
        GenreMoviesModule,
        NotFoundModule
      ],
      declarations: [MovieComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
