import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequest, setAttemptsRequest] = useState<string>("");

    function updateRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsRequest(event.target.value);
    }

    function useAttempt() {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    function addAttempts() {
        const amount = parseInt(attemptsRequest);
        if (!isNaN(amount)) {
            setAttemptsLeft(attemptsLeft + amount);
        }
    }

    return (
        <div>
            <p>Attempts Left: {attemptsLeft}</p>

            <Form.Group controlId="formRequestedAttempts">
                <Form.Label>Requested Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequest}
                    onChange={updateRequested}
                />
            </Form.Group>

            <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                use
            </Button>

            <Button onClick={addAttempts}>gain</Button>
        </div>
    );
}
