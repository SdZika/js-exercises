let board = " "
let size = 8;
for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
        if ((i + j) % 2 === 0) {board += " ";} 
        else {
            board += "#";
        }
    }
    board += "\n";
}
    
console.log(board);
