import React, { useState, useEffect } from 'react';

import Square from './Square';
import History from './History';

const Board = () => {
    const index = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const initialState = Array(9).fill(null);

    const [board, setBoard] = useState(initialState);
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const [noMovesLeft, setNoMovesLeft] = useState(false);

    const handleSquareClick = position => {
        if (winner) return; // if game is over, donot allow users to click
        setBoard(state =>
            state.map((item, index) =>
                position === index && !item ? (isXTurn ? 'X' : 'O') : item
            )
        );
        if (!board[position]) {
            setIsXTurn(state => !state);
            setGameHistory([...gameHistory, { board, isXTurn }]);
        }
    };

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < 8; i++) {
            const [x, y, z] = lines[i];
            if (board[x] && board[x] === board[y] && board[y] === board[z])
                return board[x];
        }
    };

    // check for winner
    useEffect(() => {
        const result = checkWinner();
        if (result) setWinner(result);
    }, [board]);

    // check if now move left
    useEffect(() => {
        setNoMovesLeft(!board.includes(null) && winner === null);
    }, [board]);

    return (
        <div className="grid grid-cols-3 text-white">
            <h1 className="col-span-3 text-3xl py-1">
                {winner
                    ? `${winner} wins the game!`
                    : noMovesLeft
                    ? 'Game over'
                    : isXTurn
                    ? 'X turn now!'
                    : 'O turn now!'}
            </h1>
            {index.map(item => (
                <Square onClick={() => handleSquareClick(item)} key={item}>
                    {board[item]}
                </Square>
            ))}
            <button
                className="col-span-3 p-2 hover:underline border mt-2 rounded-lg"
                onClick={() => {
                    setBoard(initialState);
                    setWinner(null);
                    setIsXTurn(true);
                    setGameHistory([]);
                }}
            >
                RESET GAME
            </button>
        </div>
    );
};

export default Board;
