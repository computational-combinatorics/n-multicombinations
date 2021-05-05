import {list} from '@iterable-iterator/list';
import {map, pick} from '@iterable-iterator/map';

import _multicombinations from './_multicombinations.js';

/**
 * Yields all combinations, with repetitions, of each possible choice of
 * <code>r</code> elements of the input iterable.
 *
 * @example
 * // A B C
 * multicombinations('ABC', 1)
 *
 * @example
 * // 00 01 02 11 12 22
 * multicombinations(range(3), 2)
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {number} r - The size of the combinations to generate.
 * @returns {IterableIterator}
 */
const multicombinations = (iterable, r) => {
	const pool = list(iterable);
	return map(
		(indices) => list(pick(pool, indices)),
		_multicombinations(pool.length, r),
	);
};

export default multicombinations;
