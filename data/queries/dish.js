import {dish as DishModel} from '../models'
import {dish as DishType} from '../type';

const dishField = {
    type: DishType,
    resolve(source, args, context, info) {
        return DishModel(context).get();
    }
};

export default dishField;