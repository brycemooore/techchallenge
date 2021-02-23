import {printNumsAboveAndBelow, rotateString} from './index.js'
import {expect} from 'chai'

describe("printNumAboveAndBelow", () => {
    it("when input is ([1, 5, 2, 1, 10], 6), output should be above: 1, below: 4", () => {
        expect(printNumsAboveAndBelow([1, 5, 2, 1, 10], 6)).to.equal("above: 1, below: 4");
    })

    it("when input is ([20, 65, 678, 43, 106], 65), output should be above: 2, below: 2", () => {
        expect(printNumsAboveAndBelow([20, 65, 678, 43, 106], 65)).to.equal("above: 2, below: 2");
    })

    it("when input is ([20, 65, 678, 43, 106], 10002), output should be above: 0, below: 5", () => {
        expect(printNumsAboveAndBelow([20, 65, 678, 43, 106], 10002)).to.equal("above: 0, below: 5");
    })
})

describe("rotateString", () => {
    it("when input is ('MyString', 2), output should be 'ngMyStri'", () => {
        expect(rotateString("MyString", 2)).to.equal("ngMyStri");
    })

    it("when input is ('MyString', 0), output should be 'MyString'", () => {
        expect(rotateString("MyString", 0)).to.equal("MyString");
    })

    it("when input is ('supercalifragilisticexpialidocious', 9), output should be 'lidocioussupercalifragilisticexpia'", () => {
        expect(rotateString("supercalifragilisticexpialidocious", 9)).to.equal("lidocioussupercalifragilisticexpia");
    })
})