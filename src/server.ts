import http from 'http';

import app from './app';
import config from './config';

const PORT = config.port;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server ready on ${PORT}`));
