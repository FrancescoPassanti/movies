import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Movie } from '@shared/models/movies.models';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieGridComponent implements OnInit {
  @Input() movies: Movie[];

  constructor() {}

  ngOnInit() {}
}
