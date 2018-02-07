// mapping GraphQL GraphQLResolveInfo into Sequelize query attributes
// bad practice
import get from 'lodash/get';

function mapping(info) {
    const r = info.fieldNodes[0];
    const s = get(r, ['selectionSet', 'selections']);
    return s.map(selection => get(selection, ['name', 'value']));
}

export default mapping;