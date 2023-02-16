import React from 'react';

const Square = ({ children, onClick }) => {
    return (
        <button
            className="border p-4 text-4xl max-h-[100px] max-w-[100px] min-h-[100px] min-w-[100px] "
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Square;
