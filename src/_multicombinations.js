import {list} from '@iterable-iterator/list';
import {nrepeat} from '@iterable-iterator/repeat';

/**
 * Yields all k-multicombinations of {0, 1, ..., n-1}.
 *
 * @param {number} n
 * @param {number} r
 * @returns {IterableIterator<number[]>}
 */
export default function* multicombinations(n, r) {
	if (n === 0 && r > 0) return;

	const indices = list(nrepeat(0, r));

	yield indices;

	while (true) {
		let i = r - 1;

		// eslint-disable-next-line no-constant-condition
		while (true) {
			if (i < 0) return;

			if (indices[i] !== n - 1) {
				const pivot = ++indices[i];

				for (++i; i < r; ++i) indices[i] = pivot;

				break;
			}

			--i;
		}

		yield indices;
	}
}
