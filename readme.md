# Jest --runInBand memory leak

This repo provides an overview of a consistently reproducible memory leak
involving `jest`, `--runInBand` and (sometimes) `jsdom` 

## jsdom, and native contexts

<img src="./images/jest-memory-leak-run-in-band.png">

It's was observed in a repo at scale, jest is leaking memory in ci during test runs.

To reproduce this result locally, follow these steps:

1. `nvm use`
1. `npm run generate-test-cases`
1. `npm run test-oom`

This will produce a csv file, that monitors several interesting properties related to the javascript heap.

Notice that this is due to stale native contexts not being garbage collected:

<img src="./images/number-of-native-contexts.png">

However, when compared to results of a process not run in band:

1. `npx jest --testEnvironment=jsdom  --no-cache --testPathPattern=./tests-leak`

<img src="./images/jest-normal-heap-no-run-in-band.png">

<img src="./images/consistent-number-of-native-contexts.png">

## regex literals, v8 parsing