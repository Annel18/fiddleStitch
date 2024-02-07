/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from 'react';

export default function Canvas({ width, height }) {
    const canvasRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [dragStart, setDragStart] = useState(null);
    const cellSize = 20; // Adjust cell size as needed

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Calculate scaled width and height
        const scaledWidth = width * cellSize * scale;
        const scaledHeight = height * cellSize * scale;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Set background color
        ctx.fillStyle = '#fff'; // White background
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw grid lines
        ctx.strokeStyle = '#000'; // Grid color
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x <= width; x++) {
            const xPos = (x * cellSize * scale) + 0.5 + offset.x;
            ctx.moveTo(xPos, offset.y);
            ctx.lineTo(xPos, scaledHeight + offset.y);
        }
        for (let y = 0; y <= height; y++) {
            const yPos = (y * cellSize * scale) + 0.5 + offset.y;
            ctx.moveTo(offset.x, yPos);
            ctx.lineTo(scaledWidth + offset.x, yPos);
        }
        ctx.stroke();
    }, [width, height, scale, offset, cellSize]);

    const handleWheel = (event) => {
        const delta = event.deltaY;
        const zoomSpeed = 0.1; // Adjust zoom speed
        const newScale = scale + (delta > 0 ? -zoomSpeed : zoomSpeed);
        setScale(Math.max(0.1, newScale)); // Ensure minimum scale

        // Prevent default behavior (e.g., scrolling the page)
        event.preventDefault();
    };

    const handleClick = (event) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const mouseX = (event.clientX - rect.left - offset.x) / scale;
        const mouseY = (event.clientY - rect.top - offset.y) / scale;
        const cellX = Math.floor(mouseX / cellSize);
        const cellY = Math.floor(mouseY / cellSize);
        const cellIndex = cellY * width + cellX;
        console.log(`Clicked cell at (${cellX}, ${cellY}), index: ${cellIndex}`);
        // Perform whatever action you want with the clicked cell index
    };
    const handleMouseDown = (event) => {
        setDragStart({ x: event.clientX, y: event.clientY });
    };

    const handleMouseMove = (event) => {
        if (dragStart) {
            const deltaX = event.clientX - dragStart.x;
            const deltaY = event.clientY - dragStart.y;
            setOffset({ x: offset.x + deltaX, y: offset.y + deltaY });
            setDragStart({ x: event.clientX, y: event.clientY });
        }
    };

    const handleMouseUp = () => {
        setDragStart(null);
    };

    return (
        <canvas
            ref={canvasRef}
            width={width * cellSize}
            height={height * cellSize}
            onWheel={handleWheel}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{ border: '1px solid black' }}
        />
    );
}
