import { describe, it, expect } from "vitest";
import { calculate } from "./math";

describe ('räknesätt', () => {
    it('adderar', () => {
        expect(calculate(2, '+', 3)).toBe(5);
    })
    it('dividerar med noll', () => {
        expect(calculate(10, '/', 2)).toBe(5);
    })

})