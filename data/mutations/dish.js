import {GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString} from 'graphql';
import projection from '../projection';
import {dish as DishModel} from '../models'
import {dish as DishType} from '../type';

const updateDish = {
    type: DishType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
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
        const {id, ...rest} = args;
        return DishModel
            .findById(id, {
                attributes: projection(info),
            })
            .then(dish => dish.update(rest));
    }
};

const createDish = {
    type: DishType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'the name of a dish',
        },
        price: {
            type: GraphQLInt,
            description: 'the price of a dish',
        }
    },
    resolve(source, args, context, info) {
        return DishModel.create(args);
    }
};

const destroyDish = {
    type: DishType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'the id of a dish',
        }
    },
    resolve(source, args, context, info) {
        return DishModel
            .findById(args.id, {
                attributes: projection(info),
            })
            .then(dish => dish.destroy().then(() => dish));
    }
};

export {updateDish, createDish, destroyDish};