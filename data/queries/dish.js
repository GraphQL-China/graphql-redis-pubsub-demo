import {GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import {dish as DishModel} from '../models'
import {dish as DishType} from '../type';
import projection from '../projection';

const retrieveDish = {
    type: new GraphQLNonNull(new GraphQLList(DishType)),
    args: {
        id: {
            type: GraphQLID,
            description: 'the id of a dish',
        },
        name: {
            type: GraphQLString,
            description: 'the name of the dish to update',
        },
        price: {
            type: GraphQLInt,
            description: 'the price of the dish to update',
        }
    },
    resolve(source, args, context, info) {
        return DishModel.findAll({
            where: args,
            attributes: projection(info),
        });
    }
};

export default retrieveDish;