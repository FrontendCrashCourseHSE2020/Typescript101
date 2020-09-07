import {Calculator} from "../main/Calculator";
import {ArraySummarizer} from "../main/ArraySummarizer";

const calculator: Calculator = new Calculator();

describe('calculate', function() {
    it('sum', function() {
        for (let i = 0; i < 10; i++) {
            let arg1 = Math.random() * 10000;
            let arg2 = Math.random() * 10000;

            let result = calculator.sum(arg1, arg2);
            expect(result).toBe(arg1 + arg2);
        }
    });

    it('subtract', function() {
        for (let i = 0; i < 10; i++) {
            let arg1 = Math.random() * 10000;
            let arg2 = Math.random() * 10000;

            let result = calculator.subtract(arg1, arg2);
            expect(result).toBe(arg1 - arg2);
        }
    });

    it('multiply', function() {
        for (let i = 0; i < 10; i++) {
            let arg1 = Math.random() * 10000;
            let arg2 = Math.random() * 10000;

            let result = calculator.multiply(arg1, arg2);
            expect(result).toBe(arg1 * arg2);
        }
    });

    it('divide', function() {
        for (let i = 0; i < 10; i++) {
            let arg1 = Math.random() * 10000;
            let arg2 = Math.random() * 10000;

            let result = calculator.divide(arg1, arg2);
            expect(result).toBe(arg1 / arg2);
        }
    });

    it('power', function() {
        for (let i = 0; i < 10; i++) {
            let arg1 = Math.random() * 10;
            let arg2 = Math.random() * 10;

            let result = calculator.power(arg1, arg2);
            expect(result).toBe(arg1 ^ arg2);
        }
    });
});



describe('array summarizer', function() {
    it('test', function() {
        let array = [];

        for (let i = 0; i < 1000; i++) {
            array.push(Math.random() * 100);
        }

        let result = new ArraySummarizer().sumArrayItems(array);

        let expected = function s(r){for(var n=0,t=0;t<r.length;t++)n+=r[t];return n}(array);

        expect(result).toBe(expected);
    });
});