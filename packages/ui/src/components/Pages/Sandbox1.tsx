import React, {useState} from "react";
import './Sandbox1.css'
import {TextInput} from "../TextInput/TextInput";
import {MemoryCard} from "../MemoryCard/MemoryCard";
import { Button } from "../Button/Button";
import { DatePicker } from "../DatePicker/DatePicker";
import { TextArea } from "../TextArea/TextArea";
import { createPortal } from "react-dom";

export const Sandbox1 = () => {
    const [pickingDate, setPickingDate] = useState(false);

    const closeDatePicker = (selectedDate: Date) => {
        console.log(selectedDate)
        setPickingDate(false)
    }

    return(
        <div className="main-dashboard">
            <div className="dashboard-container">
                <header className="dashboard-header">
                    <h1>Time Capsule</h1>
                    <p className="subtitle">Send a message to your future self</p>
                </header>

                <div className="dashboard-content">
                    <section className="create-section">
                        <h2>Create Memory</h2>
                        <TextInput sendButton={false} isRequired={true} placeholder="Give it a title" label="Title" />
                        <TextArea label="Message" placeholder="Write your message to the future..." />
                        <div className="form-actions">
                            <Button label="Pick a Date" variant="primary" size="md" onClick={() => setPickingDate(true)} />
                            <Button label="Send" variant="secondary" size="md" />
                        </div>
                        {pickingDate && createPortal(<DatePicker selectedStartingDate={new Date()} onDateChange={closeDatePicker} />, document.body)}
                    </section>

                    <section className="memories-section">
                        <h2>Your Capsules</h2>
                        <div className="dashboard-memories">
                            <MemoryCard title="Memory Card" textContent="Halo tu test" openDate={new Date(2026, 1, 12)} isPublic={true} />
                            <MemoryCard title="Memory Card" textContent="Halo tu test" openDate={new Date(2026, 2, 16)} isPublic={true} />
                            <MemoryCard title="Memory Card" textContent="Halo tu test" openDate={new Date(2026, 2, 16)} isPublic={true} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}