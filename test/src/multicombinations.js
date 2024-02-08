import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {multicombinations} from '#module';

const repr = (x) => (Array.isArray(x) ? JSON.stringify(x) : x);

const macro = (t, iterable, r, expected) => {
	t.deepEqual(list(multicombinations(iterable, r)), expected);
};

macro.title = (title, iterable, r, expected) =>
	title ?? `multicombinations(${repr(iterable)}, ${r}) is ${repr(expected)}`;

test(macro, 'ABC', 2, [
	['A', 'A'],
	['A', 'B'],
	['A', 'C'],
	['B', 'B'],
	['B', 'C'],
	['C', 'C'],
]);
test(macro, range(0, 3, 1), 2, [
	[0, 0],
	[0, 1],
	[0, 2],
	[1, 1],
	[1, 2],
	[2, 2],
]);
test(macro, range(0, 0, 1), 2, []);
test(macro, range(0, 4, 1), 0, [[]]);
test(macro, range(0, 0, 1), 0, [[]]);
