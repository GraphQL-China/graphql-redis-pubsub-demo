# graphql-redis-pubsub-demo
## Getting Started

1. start your local **redis** server
2. cd to this project directory
3. run `yarn && yarn start`
4. open your brower with [this link](http://localhost:3000/graphiql)

## currently problem
1. `subscriptions-transport-ws` does not tackle the `context` correctly
2. `graphiqlExpress` in `apollo-server-express` does not tackle multiple operation names correctly with `subscription`

## todo
1. fix the `context` problem
2. fix the `multiple operation` problem
