import { useState, useRef } from 'react';
import Tabs from "./Tabs"
import Grid from './Grid'
// import Canvas from './Canvas'

export default function Workspace() {
    const [inputs, setInputs] = useState({})
    const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
    const [zoomScale, setZoomScale] = useState(1);
    const workspaceRef = useRef(null);

    const handlePan = (event) => {
        if (event.buttons === 4) {
            const deltaX = event.movementX;
            const deltaY = event.movementY;
            setPanOffset((prevOffset) => ({
                x: prevOffset.x + deltaX,
                y: prevOffset.y + deltaY,
            }));
        }
    };

    const handleZoom = (event) => {
        const delta = event.deltaY;
        const zoomSpeed = 0.1; // Adjust zoom speed
        const newScale = zoomScale + (delta < 0 ? -zoomSpeed : zoomSpeed); // Invert zoom direction
        setZoomScale(Math.max(0.1, newScale)); // Ensure minimum scale
        event.preventDefault();
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        let json = Object.fromEntries(formData.entries())
        handleChange(json)
    }

    return (
        <section id="hero">
            <Tabs />
            <div id="work-space" ref={workspaceRef} onMouseMove={handlePan} onWheel={handleZoom}>
                <div style={{ transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomScale})` }}>
                    <Grid />
                </div>
            </div>
            <div id="secondary-header">
                <h5 className="tab">Type your instructions</h5>
            </div>
            <form id="instruction-space" onSubmit={handleSubmit} action="POST">
                <label hidden htmlFor="instructions">instructions</label>
                <textarea type="text"   name="instructions" placeholder='Type your Instructions' value={inputs.instructions || ''} onChange={handleChange} required />
            </form>

        </section>
    )
}
