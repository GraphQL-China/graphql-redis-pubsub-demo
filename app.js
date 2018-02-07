import express from 'express';
import bodyParser from 'body-parser';
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';
import morgan from 'morgan';
import {client, pubsub} from './data/redis';
import sequelize from './data/sequelize';
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
        sequelize
    }
}));
app.get('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: 'ws://localhost:3000/graphql'
}));
app.get('/playground', expressPlayground({
    endpoint: '/graphql',
}));

export default app;