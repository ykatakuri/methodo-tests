import { expect, test } from 'vitest';
import { pgcd } from '../pgcd';

test('1 and 1 are equals', () => {
    expect(pgcd(1, 1)).toBe(1)
});

test('2 and 1 is 1', () => {
    expect(pgcd(2, 1)).toBe(1)
});

test('1 and 2 is 1', () => {
    expect(pgcd(1, 2)).toBe(1)
});