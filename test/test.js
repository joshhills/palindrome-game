const assert = require('assert');
const { isPalindrome } = require('../palindrome');

console.log(isPalindrome);

describe('index', function() {
    describe('#isPalindrome()', function() {

        it('should work', function() {
            assert.ok(isPalindrome("racecar"));
            assert.ok(!isPalindrome("fail"))
        });

        it('should support any kind of character', function() {
            assert.ok(isPalindrome("bób"));
        });
    });
});