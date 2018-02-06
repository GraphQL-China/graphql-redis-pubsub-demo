import express from 'express';
import expressGraphQL from 'express-graphql';
import morgan from 'morgan';

import client from './data/redis';
import schema from './data/schema';

const logger = morgan('dev');

const app = express();
app.use(logger);

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true,
    context: {
        client
    },
    pretty: true
}));

export default app;