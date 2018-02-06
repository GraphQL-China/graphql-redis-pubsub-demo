import {GraphQLError} from 'graphql';

export default function (ctx) {
    const {client} = ctx;

    function set(v) {
        return client.set('dish', JSON.stringify(v)).then((result) => {
            if (result === 'OK') {
                return v;
            } else {
                return new GraphQLError('failed to store data into redis: ' + result);
            }
        });
    }

    function get() {
        return client.get('dish')
            .then(v => JSON.parse(v))
            .catch(err => new GraphQLError('failed to get data from redis: ' + err));
    }

    return {
        get,
        set
    }
}