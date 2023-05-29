# Coding Assessment

## Adding Arrays

Create an algorithm that receives a string that contains the information of two lists of numbers separated by commas, each list being separated by a slash, i.e.
```js
  sum_arr("1,2,3/4,5,6");
  sum_arr("10,2,25,8/1,38,-6,12");
```

Create two lists from the receives text and returns a new list by adding all the values from the two previous lists.
```js
    "1,2,3/4,5,6"  => [1,2,3] + [4,5,6] = [5, 7, 9]
    sum_arr("1,2,3/4,5,6"); // must return [5, 7, 9]
```

It's recommended to validate input cases:
- Cover Non-empty input string.
- Must include comma and slash (, & /)
- There must be only one slash.
- The characters in each comma must be integer number, not floating point numbers.
- If the input character into a possible array is not a number.
- Both arrays must be balanced, it means, must have the same amount of items.
- In case of error as the mentioned above, the function should return an empty array, it means: `[]`.

Go to directory `solver/app.js` for coding your solution.

Run the command `npm run test` for testing your approach.

The algorithm must pass all test cases.

Good Luck!