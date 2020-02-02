# palindrome-game

`npm install && npm run start`

### Solution

Two new controller endpoints, a utility function, input sanitisation with middleware and simple array operations to only maintain the top 5 scores.

I've made the assumption that palindromes cannot contain spaces.

See `index.js:14`

I've also added a simple test example - `npm run test`

### Notes

In a production application, business logic should be separated from the controller into services, repositories etc.

There could also be further kinds of tests e.g. integration to test input/output.