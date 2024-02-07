import { useState, useEffect } from 'react'

export default function Grid() {
    const [width, setWidth] = useState(20)
    const [height, setHeight] = useState(20)
    const [cells, setCells] = useState([])

    useEffect(() => {
        const createGrid = () => {
            const grid = []
            const cellSize = `${100 / width}%` // Ensure cells are square
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    const cellIndex = i * width + j
                    grid.push(
                        <div
                            key={cellIndex}
                            className="cell"
                            style={{
                                width: cellSize,
                                aspectRatio: 1,
                                border: '1px solid #000',
                                backgroundColor: '#fff', // Adjust background color as needed
                                textAlign: 'center' // Optionally center text
                            }}
                        >
                            {/* Optionally add content inside each cell */}
                        </div>
                    )
                }
            }
            setCells(grid)
        };

        createGrid()
    }, [width, height])

    return (
        <div className="grid-container">
            {cells}
        </div>
    );
}