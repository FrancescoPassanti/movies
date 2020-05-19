# API SERVER

This is a mock API server that was built using JSON SERVER. 

The API server provide all the information related to the movies collection:
- The list of the movies;
- The single movie.

## HOW TO RUN THE SERVER

```
npm run start
````

The server will be started at the port 3000. If you want to change the port, update the port value in the server.js file.

```
const PORT = 3000;
```

## ENDPOINTS

### Movies list

```
http://localhost:PORT/movies

```

### Full text search

```
http://localhost:PORT/movies?q=drama 
```

#### Movie detail

```
http://localhost:PORT/movies/{id} 
```

## MOVIE MODEL EXAMPLE

```
{
    "id":1,
    "key":"deadpool",
    "name":"Deadpool",
    "description":"A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.",
    "genres":[
    "action",
    "adventure",
    "comedy"
    ],
    "rate":"8.6",
    "length":"1hr 48mins",
    "img":"deadpool.jpg"
}
```

* In the final response, the image will be provided with the full path. 
