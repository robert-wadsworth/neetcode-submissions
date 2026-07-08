class DynamicArray {
    arr: any[]
    size: number

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.arr = Array.from({ length: capacity }, () => null);
        this.size = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.size === this.arr.length) {
            this.resize();
        }

        this.arr[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        this.size--;
        return this.arr[this.size];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        const arr = Array.from({ length: this.arr.length * 2}, () => null);
        this.arr.forEach((value, index) => {
            arr[index] = value;
        });
        this.arr = arr;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.arr.length;
    }
}
