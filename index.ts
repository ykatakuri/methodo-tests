import { testAGreaterThanB, testBGreaterThanA, testEqualsParams } from './src/test/pgcd.test';

testEqualsParams(1, 1);
testAGreaterThanB(2, 1);
testBGreaterThanA(1, 2);