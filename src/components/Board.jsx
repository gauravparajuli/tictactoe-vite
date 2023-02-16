import React, { useState } from 'react';

import Square from './Square';

const Board = () => {
    const index = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const [board, setBoard] = useState(Array(9).fill(null));

    const handleSquareClick = position => {
        setBoard(state =>
            state.map((item, index) => (index === position ? 'X' : item))
        );
    };

    return (
        <div className="grid grid-cols-3 border-2">
            {index.map(item => (
                <Square onClick={() => handleSquareClick(item)} key={item}>
                    {board[item]}
                </Square>
            ))}
        </div>
    );
};

export default Board;
