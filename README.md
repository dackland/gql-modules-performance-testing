# GraphQL Modules Performance Testing

While upgrading `GraphQL Modules` from `v0` to `v1`, we noticed that performance had degraded by a significant margin.

Investigation found that using Apollo Server with `v1` is much slower than Apollo Server with `v0`.

## Repo structure

For each folder `v0` and `v1`, there are two GraphQL servers, `Apollo` and `Express`, with a very basic module to demonstrate the performance differences.

## Running the servers

1. Navigate to a server folder, eg. `/v0/apollo/`.
2. Run `yarn`, and `yarn start`.

## Installing k6

The performance script uses a load testing tool, `k6`, which needs to be installed via the instructions [`here`](https://k6.io/docs/getting-started/installation/). Or simply `brew install k6` if on a mac.

## Running the performance script

`yarn test:performance`
