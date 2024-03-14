/**
 * Function to safely convert a value to a integer.
 * @example
 * ```ts
 * import { getInt } from "@cr/get-int";
 *
 * console.log(getInt(10)); // 10
 * console.log(getInt("10")); // 10
 * console.log(getInt(10.5)); // undefined
 * console.log(getInt("10.5")); // undefined
 * console.log(getInt(true)); // undefined
 * console.log(getInt(false)); // undefined
 * console.log(getInt({})); // undefined
 * console.log(getInt([])); // undefined
 * console.log(getInt(() => {})); // undefined
 * console.log(getInt(undefined)); // undefined
 * console.log(getInt(null)); // undefined
 * console.log(getInt(NaN)); // undefined
 * console.log(getInt(Infinity)); // undefined
 * console.log(getInt(-Infinity)); // undefined
 * console.log(getInt(0 / 0)); // undefined
 * console.log(getInt(-0 / 0)); // undefined
 * console.log(getInt(1 / 0)); // undefined
 * console.log(getInt(-1 / 0)); // undefined
 * console.log(getInt(Number.MAX_SAFE_INTEGER + 1)); // undefined
 * console.log(getInt(Number.MIN_SAFE_INTEGER - 1)); // undefined
 * ```
 *
 * @param {unknown} value - The value to convert.
 * @return {number | undefined} The converted value as a integer, or undefined if the conversion is not possible.
 */
export function getInt(value: unknown): number | undefined {
  if (typeof value !== "number" && typeof value !== "string") {
    return undefined;
  }
  const num = Number(value);

  return Number.isSafeInteger(num) ? num : undefined;
}
