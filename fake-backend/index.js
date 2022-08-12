const { createServer } = require('the-fake-backend');
require('dotenv').config();

const port = process.env.PORT;

const server = createServer();

server.routes([
  {
    path: '/images/:image',
    methods: [
      {
        type: 'get',
      }
    ]
  },
  {
    path: '/game-list',
    methods: [
      {
        type: 'get',
      }
    ]
  },
  {
    path: '/highlighted',
    methods: [
      {
        type: 'get',
      }
    ]
  },
]);

server.listen(port);
