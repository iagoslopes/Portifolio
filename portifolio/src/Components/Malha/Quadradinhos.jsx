import React, { useEffect, useState } from 'react';
import './quadradinhos.css';

const Quadradinhos = () => {
    const [columns, setColumns] = useState([]);
    const [squareSize, setSquareSize] = useState(7);

    useEffect(() => {
        const generateColumns = () => {
            const screenWidth = window.innerWidth;
            const numColumns = Math.floor(screenWidth / squareSize);
            const numRows = 7;

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

        const handleResize = () => {
            setSquareSize(5); // Redefina o tamanho inicial para recalcular com base na nova largura da tela
            setColumns(generateColumns());
        };

        // Adiciona um ouvinte de evento para redimensionamento da tela
        window.addEventListener('resize', handleResize);

        // Executa a geração inicial de colunas
        setColumns(generateColumns());

        // Remove o ouvinte de evento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [squareSize]); // Adiciona squareSize como uma dependência para reexecutar o efeito quando ele muda

    return <div className="container-quad">{columns}</div>;
};

const QuadradinhosInverse = () => {
    const [columns, setColumns] = useState([]);
    const [squareSize, setSquareSize] = useState(3);

    useEffect(() => {
        const generateColumns = () => {
            const screenWidth = window.innerWidth;
            const numColumns = Math.floor(screenWidth / squareSize);
            const numRows = 11;

            const cols = [];
            for (let i = 0; i < numColumns; i++) {
                const squares = [];
                for (let j = 0; j < numRows; j++) {
                    const isOddRow = j % 2 === 1;
                    const isOddSquare = i % 2 === 1;

                    const sizeMultiplier = ((numRows / 4) + j) / numRows; // Agora aumenta de tamanho para baixo

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

        const handleResize = () => {
            setSquareSize(5); // Redefina o tamanho inicial para recalcular com base na nova largura da tela
            setColumns(generateColumns());
        };

        // Adiciona um ouvinte de evento para redimensionamento da tela
        window.addEventListener('resize', handleResize);

        // Executa a geração inicial de colunas
        setColumns(generateColumns());

        // Remove o ouvinte de evento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [squareSize]); // Adiciona squareSize como uma dependência para reexecutar o efeito quando ele muda

    return <div className="container-quad">{columns}</div>;
};

export { Quadradinhos, QuadradinhosInverse };