# GraphQL Modules Performance Testing

Each folder `v0`, `v1`, and `standalone` (Apollo Server), have the same basic `Movie` module.

## Running the servers

1. Navigate to a server folder, eg. `/v0/`.
2. Run `yarn`, and `yarn start`.

## Installing k6

The performance script uses a load testing tool, `k6`, which needs to be installed via the instructions [`here`](https://k6.io/docs/getting-started/installation/). Or simply `brew install k6` if on a mac.

## Running the performance script

`yarn test:performance`

## Performance Test Results

The k6 script performs as many requests as possible against the running server within 10 seconds.

|      Server       | Median Request Duration | Request Count |
| :---------------: | :---------------------: | :-----------: |
| Apollo Standalone |          236ms          |      42       |
|  GQL Modules v0   |          229ms          |      43       |
|  GQL Modules v1   |          460ms          |      22       |

Tests were run using node version `16.3.0`.
