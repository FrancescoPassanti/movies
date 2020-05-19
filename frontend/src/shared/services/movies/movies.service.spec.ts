import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { EnvironmentService } from '@environments/environment.service';
import { GenreType } from '@shared/enums/genres.enum';
import { Movie } from '@shared/models/movies.models';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let injector: TestBed;
  let movieService: MoviesService;
  let environmentService: EnvironmentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    environmentService = injector.get(EnvironmentService);
    movieService = injector.get(MoviesService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(movieService).toBeTruthy();
  });

  it('should return an Observable<Movie[]>', () => {
    const dummyMovies: Movie[] = [
      {
        id: '1',
        key: 'deadpool',
        name: 'Deadpool',
        description: 'A former Special ',
        genres: [GenreType.Action],
        rate: '8.6',
        length: '1hr 48mins',
        img: 'deadpool.jpg'
      }
    ];

    movieService.getMovies({}).subscribe((movies) => {
      expect(movies.length).toBe(1);
      expect(movies).toEqual(dummyMovies);
    });

    const req = httpMock.expectOne(
      `${environmentService.moviesAPI.url}/movies`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyMovies);
  });

  it('should return an Observable<Movie>', () => {
    const key = 'deadpool';

    const dummyMovie: Movie = {
      id: '1',
      key: 'deadpool',
      name: 'Deadpool',
      description: 'A former Special ',
      genres: [GenreType.Action],
      rate: '8.6',
      length: '1hr 48mins',
      img: 'deadpool.jpg'
    };

    movieService.getMovie(key).subscribe((movie) => {
      expect(movie.id).toEqual(dummyMovie.id);
    });

    const req = httpMock.expectOne(
      `${environmentService.moviesAPI.url}/movies?key=${key}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyMovie);
  });
});
