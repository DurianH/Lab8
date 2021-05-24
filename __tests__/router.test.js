/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';

 test('Checking settings', () => {
     expect(pushToHistory('settings', 1)).toBe(history);
 });

 test('Checking entry', () => {
    expect(pushToHistory('entry', 1)).toBe(history);
});

test('Checking default', () => {
    expect(pushToHistory('something', 1)).toBe(history);
});