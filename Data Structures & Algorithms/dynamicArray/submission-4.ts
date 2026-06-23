class DynamicArray {
    size: number;
    array: Array<number>;

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.array = Array.from({ length: capacity }, () => null);
        this.size = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if( this.size === this.array.length) {
            this.resize();
        }
        this.array[this.size] = n;
        this.size += 1;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const index = this.size - 1;
        const value = this.array[index];
        this.array[index] = null;
        
        this.size -= 1;
        return value;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        const newArray: Array<number> = Array.from({ length: this.array.length * 2 }, (_, index) => {
            return (index < this.array.length) ? this.array[index] : null;
        });
        this.array = newArray;
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
        return this.array.length;
    }
}
