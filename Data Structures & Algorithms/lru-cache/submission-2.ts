class LRUCache {
    cache: Map<number, number>
    capacity: number

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        
        if (this.cache.size > this.capacity) {
            const keys = this.cache.keys();
            this.cache.delete(keys.next().value);
        }
    }
}
