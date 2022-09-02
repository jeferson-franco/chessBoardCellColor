function solution(cell1, cell2) {
    const cell1Color = cell1[0].charCodeAt(0) % 2 === cell1[1] % 2;
    const cell2Color = cell2[0].charCodeAt(0) % 2 === cell2[1] % 2;
    return cell1Color === cell2Color;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test chessBoardCellColor

// alternative solution
// let color = (s) => (Buffer(s)[0] - s[1]) % 2;
// let solution = (a, b) => color(a) == color(b);

// alternative solution
// function solution(cell1, cell2) {
//     let board = {
//         A: 1,
//         B: 2,
//         C: 3,
//         D: 4,
//         E: 5,
//         F: 6,
//         G: 7,
//         H: 8,
//     };
//     const total1 = board[cell1[0]] + parseInt(cell1[1]);
//     const total2 = board[cell2[0]] + parseInt(cell2[1]);
//     return total1 % 2 === total2 % 2;
// }

// alternative solution
// function solution(cell1, cell2) {
//     return (cell1.charCodeAt(0) + Number(cell1[1]) + cell2.charCodeAt(0) + Number(cell2[1])) % 2 == 0;
// }
