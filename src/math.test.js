import { describe, it, expect } from "vitest";
import { calculate } from "./math";

describe ('räknesätt', () => {
    it('adderar', () => {
        expect(calculate(2, '+', 3)).toBe(5);
    })
    it('dividerar med noll', () => {
        expect(calculate(10, '/', 0)).toBe("fel");
    })
    it('subtraherar', () => {
        expect(calculate(5, '-', 2)).toBe(3);
      })
      
      it('multiplicerar', () => {
        expect(calculate(4, '*', 2)).toBe(8);
      })
      it('dividerar', () => {
        expect(calculate(10, '/', 2)).toBe(5);
    })
    

})