const http = require('http');
const voteRouteController = require('./controllers/vote');
const mainRouteController = require('./controllers/main');
const defaultRouteController = require('./controllers/default');
const gameRouteController = require('./controllers/game');

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/vote":
            voteRouteController(req, res);
      break;
      case "/game":
        gameRouteController(res);
  break;
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;
        default:
            defaultRouteController(res, url);
  }
});
    
server.listen(3005);