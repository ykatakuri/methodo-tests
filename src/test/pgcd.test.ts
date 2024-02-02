import { pgcd } from '../pgcd';

export function testEqualsParams(a: number, b: number) {
    let expected = 1;

    let result = pgcd(a, b);

    if (result === expected) {
        console.log(`${a} and ${b} are equal`);
    }
}

export function testAGreaterThanB(a: number, b: number) {
    let expected = 1;
    let result = pgcd(a, b);
    console.log(`pgcd(${a}, ${b}) = ${result}`);
}

export function testBGreaterThanA(a: number, b: number) {
    let expected = 1;
    let result = pgcd(a, b);
    console.log(`pgcd(${a}, ${b}) = ${result}`);
}