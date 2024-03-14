import { assertEquals } from "jsr:@std/assert@^0.219.1";
import { getInt } from "./mod.ts";

Deno.test("getInt", () => {
  assertEquals(getInt(10), 10);
  assertEquals(getInt("10"), 10);
  assertEquals(getInt(10.5), undefined);
  assertEquals(getInt("10.5"), undefined);
  assertEquals(getInt(true), undefined);
  assertEquals(getInt(false), undefined);
  assertEquals(getInt({}), undefined);
  assertEquals(getInt([]), undefined);
  assertEquals(
    getInt(() => {}),
    undefined
  );
  assertEquals(getInt(undefined), undefined);
  assertEquals(getInt(null), undefined);
  assertEquals(getInt(NaN), undefined);
  assertEquals(getInt(Infinity), undefined);
  assertEquals(getInt(-Infinity), undefined);
  assertEquals(getInt(0 / 0), undefined);
  assertEquals(getInt(-0 / 0), undefined);
  assertEquals(getInt(1 / 0), undefined);
  assertEquals(getInt(-1 / 0), undefined);
  assertEquals(getInt(Number.MAX_SAFE_INTEGER + 1), undefined);
  assertEquals(getInt(Number.MIN_SAFE_INTEGER - 1), undefined);
});
