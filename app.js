import express from 'express';
import bodyParser from 'body-parser';
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express';
import morgan from 'morgan';
import {client, pubsub} from './data/redis';
import schema from './data/schema';

const logger = morgan('dev');

const app = express();
app.use(logger);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/graphql', graphqlExpress({
    schema: schema,
    context: {
        client,
        pubsub,
    }
}));
app.get('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: 'ws://localhost:3000/subscriptions'
}));

export default app;