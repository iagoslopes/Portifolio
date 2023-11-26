import React, { useEffect, useState } from 'react';
import './quadradinhos.css';

const Quadradinhos = () => {
    const [columns, setColumns] = useState([]);
    const squareSize = 7;

    useEffect(() => {
        const screenWidth = window.innerWidth;
        const numColumns = Math.floor(screenWidth / squareSize);
        const numRows = 8;

        const generateColumns = () => {
            const cols = [];
            for (let i = 0; i < numColumns; i++) {
                const squares = [];
                for (let j = 0; j < numRows; j++) {
                    const isOddRow = j % 2 === 1;
                    const isOddSquare = i % 2 === 1;

                    const sizeMultiplier = (numRows - j) / numRows;

                    squares.push(
                        <div
                            key={`${i}-${j}`}
                            className="square"
                            style={{
                                opacity: (isOddRow && !isOddSquare) || (!isOddRow && isOddSquare) ? 0 : 1,
                                width: `${squareSize * sizeMultiplier}px`,
                                height: `${squareSize * sizeMultiplier}px`,
                            }}
                        ></div>
                    );
                }
                cols.push(
                    <div key={i} className="column">
                        {squares}
                    </div>
                );
            }
            return cols;
        };

        setColumns(generateColumns());
    }, []);

    return <div className="container-quad">{columns}</div>;
};

const QuadradinhosInverse = () => {
    const [columns, setColumns] = useState([]);
    const squareSize = 10;

    useEffect(() => {
        const screenWidth = window.innerWidth;
        const numColumns = Math.floor(screenWidth / squareSize);
        const numRows = 10;

        const generateColumns = () => {
            const cols = [];
            for (let i = 0; i < numColumns; i++) {
                const squares = [];
                for (let j = 0; j < numRows; j++) {
                    const isOddRow = j % 2 === 1;
                    const isOddSquare = i % 2 === 1;

                    const sizeMultiplier = (j + 1) / numRows;

                    squares.push(
                        <div
                            key={`${i}-${j}`}
                            className="square"
                            style={{
                                opacity: (isOddRow && !isOddSquare) || (!isOddRow && isOddSquare) ? 0 : 1,
                                width: `${squareSize * sizeMultiplier}px`,
                                height: `${squareSize * sizeMultiplier}px`,
                            }}
                        ></div>
                    );
                }
                cols.push(
                    <div key={i} className="column">
                        {squares}
                    </div>
                );
            }
            return cols;
        };

        setColumns(generateColumns());
    }, []);

    return <div className="container-quad">{columns}</div>;
};

export { Quadradinhos, QuadradinhosInverse };