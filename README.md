# @cr/get-int

Strictly parse an integer or integer string. If not parsed, returns undefined.

## Usage

```ts
import { getInt } from "@cr/get-int";

console.log(getInt(10)); // 10
console.log(getInt("10")); // 10
console.log(getInt(10.5)); // undefined
console.log(getInt("10.5")); // undefined
console.log(getInt(true)); // undefined
console.log(getInt(false)); // undefined
console.log(getInt({})); // undefined
console.log(getInt([])); // undefined
console.log(getInt(() => {})); // undefined
console.log(getInt(undefined)); // undefined
console.log(getInt(null)); // undefined
console.log(getInt(NaN)); // undefined
console.log(getInt(Infinity)); // undefined
console.log(getInt(-Infinity)); // undefined
console.log(getInt(0 / 0)); // undefined
console.log(getInt(-0 / 0)); // undefined
console.log(getInt(1 / 0)); // undefined
console.log(getInt(-1 / 0)); // undefined
console.log(getInt(Number.MAX_SAFE_INTEGER + 1)); // undefined
console.log(getInt(Number.MIN_SAFE_INTEGER - 1)); // undefined
```
