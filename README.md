# Betsson Group: Movies Application
- Author: Francesco Passanti
- Release date: 18 May 2020

## How to run it

### Using docker

```
cd to_path_root (where the docker-compose.yaml is located)

docker-compose up --build 
```

- API --> http://localhost:3000/movies
- FRONTEND --> http://localhost:8080 (Angular is in built mode)


### Using npm

```
cd to_path_root

cd scripts

chmod +x api.sh frontend.sh

launch both scripts

./api.sh
./frontend.sh

```

- API --> http://localhost:3000/movies
- FRONTEND --> http://localhost:4200 (Angular is dev mode)

*be sure that the ports 3000 and 8080 or 4200 are not busy

## API Overview

The API project exposes several endpoints that are useful to retrieve the movies information.

### Technologies used
The following technologies were used to build the frontend:
- JSON-SERVER;


### Endpoints

#### List of movies 

```
/movies
```

#### List of movies full-text search

```
/movies?q=:term
```

#### List of movies by genre

```
/movies?genres_like=:genre
```

#### Top rated movies 

```
/movies?_limit=12&_sort=rate&_order=desc
```

#### Single movie
```
/movies?key=:slug
```
* Since was not possible to get a single movie using the key instead of the id, I used this endpoint that returns an array of object with size 1.

#### Next-releases

```
/next-releases
```


## Frontend Overview

The application is a movies collection that exposes detail about the last released movies. The application is composed of three main pages:
- The homepage;
- The movies grid;
- The movie detail;

### Technologies used
The following technologies were used to build the frontend:
- Angular 8;
- NGRX;
- Bootstrap 4 and ng-bootstrap;

### Layout
The layout is composed of two main parts:
- The navbar where there is a form for searching the movie;
- The content section that is filled every time with the content of each page;

### Pages

#### Homepage
- Path: /
- Sections: Next release and top rated

In the homepage there are two sections:
- An initial banner with the next movies releases; 
- A grid with the top-rated movies.

#### Movies grid
- Paths: /movies | /movies?term={term} | /movies?genre={genre}

In this page, there is a grid with all the movies existing in the catalogue. The movies can be filtered in two ways:
- Using the search form in the navbar;
- Clicking on a movie's genre;

#### Movie detail
- Path: /movies/{slug}
- Sections: Movie detail, genres related movies

In the movie detail page there are two sections:
- At the top there is the movie detail;
- After the movie detail, there are different rows, each of which contains more movies for a specific genre. 

*The single movie will be displayed in the genres rows too since there isn't an accurate filter it in the backend.


## Test

```
cd to_path_root

cd frontend

ng test

```