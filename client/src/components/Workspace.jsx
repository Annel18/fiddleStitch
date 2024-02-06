import { useState } from 'react'
import Tabs from "./Tabs"
export default function Workspace() {
    const [inputs, setInputs] = useState({})
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
            <div id="work-space">
                <canvas />
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