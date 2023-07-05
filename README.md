Reproducible case for issue with jest 29.6.0

Steps: 
```
git clone git@github.com:juan-fernandez/test-jest-bug.git
```

```
cd test-jest-bug
```

```
yarn
```

```
yarn test
```

You should see the following error: 

```
 FAIL  ./bad-test.test.js


  ● Test suite failed to run

    ReferenceError: You are trying to `import` a file outside of the scope of the test code.

       5 |     afterAll(() => {
       6 |         setImmediate(() => {
    >  7 |             require('./cleanup.js')
         |             ^
       8 |         })
       9 |     })
      10 | })

      at Runtime._execModule (node_modules/jest-runtime/build/index.js:1381:13)
      at Immediate.require (bad-test.test.js:7:13)

Test Suites: 1 failed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.123 s, estimated 1 s
```