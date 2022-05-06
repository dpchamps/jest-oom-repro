# Jest --runInBand memory leak

This repo provides an overview of a consistently reproducible memory leak
involving `jest`, `--runInBand` and (sometimes) `jsdom` 

## getting started

Run the following commands to set up the repro project:

1. `nvm use`
1. `npm install`
1. `npm run generate-test-cases`

## jsdom, and native contexts

<figure>
    <img src="./images/jest-memory-leak-run-in-band.png">
    <figcaption>
        Observe a linearly increasing heap size. Allowed to continue the process will crash with a Heap OOM
    </figcaption>
</figure>

It's was observed in a repo at scale, jest is leaking memory in ci during test runs.

To reproduce this result locally, run:

1. `npm run test-oom`

This will produce a csv file that monitors several interesting properties related to the javascript heap and vm.

Notice that this is due to stale native contexts not being garbage collected:

<figure>
<img src="./images/number-of-native-contexts.png">
<figcaption>
    Native contexts linearly increasing, each retaining a `jsdom` `Window` object
</figcaption>
</figure>

However, when compared to results of a process not run in band the process exhibits expected behavior:

1. `npx jest --testEnvironment=jsdom  --no-cache --testPathPattern=./tests-leak`

<figure float="left" width="200px">
<img src="./images/jest-normal-heap-no-run-in-band.png">
<figcaption>
    When specifications are run in parallel, the test runner does not leak memory.
</figcaption>
</figure>

<figure>
<img src="./images/consistent-number-of-native-contexts.png">
<figcaption>
    We see here that Native Contexts are being properly garbage collected over time.
</figcaption>
</figure>

## regex literals, v8 parsing

