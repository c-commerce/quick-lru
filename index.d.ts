export interface Options {
	/**
	 * The maximum number of items before evicting the least recently used items.
	 */
	readonly maxSize: number;
}

declare class QuickLRU<KeyType extends unknown, ValueType extends unknown>
	implements Iterable<[KeyType, ValueType]> {
	/**
	 * The stored item count.
	 */
	readonly size: number;

	/**
	 * Simple ["Least Recently Used" (LRU) cache](https://en.m.wikipedia.org/wiki/Cache_replacement_policies#Least_Recently_Used_.28LRU.29).
	 *
	 * The instance is [`iterable`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols) so you can use it directly in a [`for…of`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of) loop.
	 */
	constructor(options: Options);

	[Symbol.iterator](): IterableIterator<[KeyType, ValueType]>;

	/**
	 * Set an item.
	 *
	 * @returns The list instance.
	 */
	set(key: KeyType, value: ValueType): this;

	/**
	 * Get an item.
	 *
	 * @returns The stored item or `undefined`.
	 */
	get(key: KeyType): ValueType | undefined;

	/**
	 * Check if an item exists.
	 */
	has(key: KeyType): boolean;

	/**
	 * Get an item without marking it as recently used.
	 *
	 * @returns The stored item or `undefined`.
	 */
	peek(key: KeyType): ValueType | undefined;

	/**
	 * Delete an item.
	 *
	 * @returns `true` if the item is removed or `false` if the item doesn't exist.
	 */
	delete(key: KeyType): boolean;

	/**
	 * Delete all items.
	 */
	clear(): void;

	/**
	 * Iterable for all the keys.
	 */
	keys(): IterableIterator<KeyType>;

	/**
	 * Iterable for all the values.
	 */
	values(): IterableIterator<ValueType>;
}

export default QuickLRU;
