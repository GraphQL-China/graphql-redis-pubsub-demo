# graphql-redis-pubsub-demo
## Getting Started

1. start your local **redis** server
2. cd to this project directory
3. run `yarn && yarn start`
4. open your brower with [this link](http://localhost:3000/graphiql)

## current problems
1. `subscriptions-transport-ws` does not tackle the `context` correctly, [link](https://github.com/apollographql/subscriptions-transport-ws/issues/300)
2. `graphiqlExpress` in `apollo-server-express` does not tackle multiple operation names correctly with `subscription`, [link](https://github.com/graphql/graphiql/issues/605)

## todos
1. wait for fixture of the `context` problem
2. wait for fixture of the `multiple operation` problem
