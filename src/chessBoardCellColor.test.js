const solution = require('./chessBoardCellColor.js');

test('test 1', () => {
    expect(solution("A1", "C3")).toBe(true);
});

test('test 2', () => {
    expect(solution("A1", "H3")).toBe(false);
});

test('test 3', () => {
    expect(solution("A1", "A2")).toBe(false);
});

test('test 4', () => {
    expect(solution("A1", "B2")).toBe(true);
});

test('test 5', () => {
    expect(solution("B3", "H8")).toBe(false);
});

test('test 6', () => {
    expect(solution("C3", "B5")).toBe(false);
});

test('test 7', () => {
    expect(solution("G5", "E7")).toBe(true);
});

test('test 8', () => {
    expect(solution("C8", "H8")).toBe(false);
});

test('test 9', () => {
    expect(solution("D2", "D2")).toBe(true);
});

test('test 10', () => {
    expect(solution("A2", "A5")).toBe(false);
});
