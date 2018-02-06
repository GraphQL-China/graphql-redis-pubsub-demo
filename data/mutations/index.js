import {GraphQLObjectType,} from 'graphql';
import dish from './dish';

export default new GraphQLObjectType({
    name: 'Mutation',
    description: 'root mutation',
    fields: {
        updateDish: dish
    }
});