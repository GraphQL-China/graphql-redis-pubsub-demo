import {GraphQLObjectType} from 'graphql';
import dish from './dish';

export default new GraphQLObjectType({
    name: 'Subscription',
    description: 'root subscription',
    fields: {
        updatedDish: dish,
    },
});