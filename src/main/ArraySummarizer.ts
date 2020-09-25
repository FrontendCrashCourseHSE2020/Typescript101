export class ArraySummarizer {
    /**
     * Summarize all elements of the array.
     *
     * @param array Array of numbers.
     *
     * @return Sum of the array items.
     */
    sumArrayItems(array: number[]): number {
        return array.reduce((a, b) => a + b, 0);
    }

}
