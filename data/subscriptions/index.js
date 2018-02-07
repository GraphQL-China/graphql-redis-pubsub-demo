import {GraphQLObjectType} from 'graphql';
import {dishCreated, dishDestroyed, dishUpdated} from './dish';

export default new GraphQLObjectType({
    name: 'Subscription',
    description: 'root subscription',
    fields: {
        dishUpdated,
        dishCreated,
        dishDestroyed,
    },
});