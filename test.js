import {printNumsAboveAndBelow} from './index.js'
import {expect} from 'chai'

describe("printNumAboveAndBelow", () => {
    it("when input is ([1, 5, 2, 1, 10], 6), output should be above: 1, below: 4", () => {
        expect(printNumsAboveAndBelow([1, 5, 2, 1, 10], 6)).to.equal("above: 1, below: 4");
    })
})