import Redis from 'ioredis';
import {RedisPubSub} from 'graphql-redis-subscriptions';

const options = {
    lazyConnect: true
};
const client = new Redis(options);
const pubsub = new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options)
});

export {
    client,
    pubsub,
};
