const expect = require('chai').expect;
import { sumArray, multiplyArray } from '../../src/js/library/util/array';

// Test suite
describe('ARRAY FUNCTIONS', () => {
    const array = [1, 2, 3, 4, 5];
    describe('sumArray', () => {
        it('should accept an array', () => {
            expect(array).to.be.a('array');
        });
        it('should return a number', () => {
            expect(sumArray(array)).to.be.a('number');
        });
        it('should not return 0', () => {
            expect(sumArray(array)).not.to.equal(0);
        });
    });

    describe('multiplyArray', () => {
        it('should accept an array', () => {
            expect(array).to.be.a('array');
        });
        it('should return a number', () => {
            expect(multiplyArray(array)).to.be.a('number');
        });
        it('should not return 0', () => {
            expect(multiplyArray(array)).not.to.equal(0);
        });
    });
});

