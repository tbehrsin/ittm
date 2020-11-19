import { server } from './index';

server.listen({ port: process.env.PORT || 8000 }).then(({ url }) => {
  console.log(`Listening at ${url}`);
});
