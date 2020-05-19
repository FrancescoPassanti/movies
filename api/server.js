const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const PORT = 3000;
const MOVIE_IMG_PATH = `http://localhost:${PORT}/assets/images/movie-covers/`;
const MOVIE_BANNER_PATH = `http://localhost:${PORT}/assets/images/next-releases/`;
const addBasicPathToImg = (img) => MOVIE_IMG_PATH + img;
const addBasicPathToBanner = (img) => MOVIE_BANNER_PATH + img;

router.render = (req, res) => {

  const data = res.locals.data;

  if (Object.keys(data).length === 0) {
    res.jsonp(data);
  } else {
    if (Array.isArray(data)) {
      Object.keys(data).forEach((item) => {
        data[item]['img'] = addBasicPathToImg(data[item]['img']);
        data[item]['banner'] = addBasicPathToBanner(data[item]['banner']);
      });
    } else {
      data['img'] = addBasicPathToImg(data['img']);
      data['banner'] = addBasicPathToBanner(data['banner']);
    }

    res.jsonp(data);
  }
}

server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
  console.log('API Server is running')
})