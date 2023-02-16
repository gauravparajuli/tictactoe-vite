import React, { useState } from 'react';

import Square from './Square';

const Board = () => {
    const index = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const initialState = Array(9).fill(null);

    const [board, setBoard] = useState(initialState);
    const [isXNext, setIsXNext] = useState(false);

    const handleSquareClick = position => {
        setBoard(state =>
            state.map((item, index) =>
                position === index && !item ? (isXNext ? 'O' : 'X') : item
            )
        );
        setIsXNext(state => !state);
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
