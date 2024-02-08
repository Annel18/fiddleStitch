import { useState, useEffect } from 'react';

export default function Grid() {
    const [width, setWidth] = useState(20);
    const [height, setHeight] = useState(20);
    const [cells, setCells] = useState([]);
    const [clickedCells, setClickedCells] = useState([]);

    useEffect(() => {
        const createGrid = () => {
            const grid = [];
            const cellSize = `${100 / width}%`; // Ensure cells are square
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    const cellIndex = i * width + j;
                    const cellLogo = clickedCells.find((cell) => cell.cellIndex === cellIndex)?.logo; // Get logo for this cell if it exists
                    grid.push(
                        <div
                            key={cellIndex}
                            className="cell"
                            style={{
                                width: cellSize,
                                aspectRatio: 1,
                                border: '1px solid #000',
                                backgroundColor: '#fff', // Adjust background color as needed
                                textAlign: 'center', // Optionally center text
                                cursor: 'pointer', // Set cursor to pointer to indicate interactivity
                            }}
                            onClick={() => handleCellClick(cellIndex)} // Add onClick handler
                        >
                            {cellLogo && <img src={cellLogo} alt="svg" style={{ width: '100%', height: '100%' }} />}
                            {/* Optionally add content inside each cell */}
                        </div>
                    );
                }
            }
            setCells(grid);
        };

        createGrid();
    }, [width, height, clickedCells]); // Include clickedCells in the dependency array

    const handleCellClick = (cellIndex) => {
        // Find the selected logo URL from localStorage
        const logoURL = localStorage.getItem('logo');
        if (logoURL) {
            // Update clickedCells array with the new logo information for the clicked cell
            setClickedCells((prevClickedCells) => [
                ...prevClickedCells.filter((cell) => cell.cellIndex !== cellIndex), // Remove existing entry for this cell if it exists
                { cellIndex, logo: logoURL }, // Add new entry for this cell
            ]);
        }
    };

    return <div className="grid-container">{cells}</div>;
}
