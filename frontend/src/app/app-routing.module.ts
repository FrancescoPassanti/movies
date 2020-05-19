import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesModule)
  },
  {
    path: 'movies/:slug',
    loadChildren: () =>
      import('./pages/movie/movie.module').then((m) => m.MovieModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    } as ExtraOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
