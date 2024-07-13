export const ROWS = 30
export const COLS = 50

export const createEmptyGrid = () => {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0))
}


export const DIRECTIONS = [
    [0, 1], //Right
    [1, 1],  // DOWN-RIGHT
    [1, 0], // DOWN
    [1, -1], // DOWN-LEFT
    [0, -1], // LEFT
    [-1, -1], //UP-LEFT
    [-1, 0], //UP
    [-1, 1], // UP-RIGHT
]