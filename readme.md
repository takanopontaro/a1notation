# A1Notation

Interconvert between A1Notation and RC.

```js
const a1 = require('a1notation');
a1('B7'); // { r: 6, c: 1 }
a1('B7', true) // { r: 7, c: 2 }
a1(6, 1) // 'B7'
a1(7, 2, true) // 'B7'
```

See test.js for more examples.
