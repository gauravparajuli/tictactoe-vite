import React from 'react';

import Square from './Square';

const Board = () => {
    const index = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="grid grid-cols-3">
            {index.map(item => (
                <Square key={item}>{item}</Square>
            ))}
        </div>
    );
};

export default Board;
