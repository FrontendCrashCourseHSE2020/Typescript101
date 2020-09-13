export class Calculator {

    /**
     * Sum two numbers.
     *
     * @param arg1 First argument.
     * @param arg2 Second argument.
     *
     * @return Sum of two numbers.
     */
    sum(arg1: number, arg2: number): number {

        return arg1 + arg2;      
    }

    /**
     * Subtract one number from another.
     *
     * @param arg1 First argument.
     * @param arg2 Second argument.
     *
     * @return Subtraction of one number from another.
     */
    subtract(arg1: number, arg2: number): number {
        return arg1-arg2;
    }

    /**
     * Multiplicate two numbers.
     *
     * @param arg1 First argument.
     * @param arg2 Second argument.
     *
     * @return Multiplication of two numbers.
     */
    multiply(arg1: number, arg2: number): number {
        return arg1*arg2;
    }

    /**
     * Divide one number by another.
     *
     * @param arg1 First argument.
     * @param arg2 Second argument.
     *
     * @return Division of two numbers.
     */
    divide(arg1: number, arg2: number): number {
        return arg1/arg2;
    }

    /**
     * Calculate power of numbers.
     *
     * @param arg1 First argument.
     * @param arg2 Second argument.
     *
     * @return Power of numbers.
     */
    power(arg1: number, arg2: number): number {
        return arg1 ^ arg2;
    }

}