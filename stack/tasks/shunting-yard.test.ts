import {describe, expect, it} from "@jest/globals";
import {shuntingYard} from "./shunting-yard";

describe('shuntingYard', () => {
    it('should convert simple expression', () => {
        expect(shuntingYard('3 + 4')).toEqual('3 4 +')
        expect(shuntingYard('3 - 4')).toEqual('3 4 -')
        expect(shuntingYard('3 * 4')).toEqual('3 4 *')
        expect(shuntingYard('3 / 4')).toEqual('3 4 /')
        expect(shuntingYard('2 - 1 + 3')).toEqual('2 1 - 3 +')
    });


    it('should convert complex expression', () => {
        expect(shuntingYard('( 5 + 15 ) / ( 4 + 7 - 1 )')).toEqual('5 15 + 4 7 + 1 - /')
        expect(shuntingYard('3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3')).toEqual('3 4 2 * 1 5 - 2 3 ^ ^ / +')
    });
})