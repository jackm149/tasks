import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [value, setValue] = useState<string>("");

    function updateValue(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }
    if (value === expectedAnswer) {
        return (
            <div>
                <Form.Group controlId="formMovieName">
                    <Form.Control value={value} onChange={updateValue} />
                </Form.Group>
                {value === expectedAnswer ? "✔️" : "❌"}
            </div>
        );
    } else {
        return (
            <div>
                <Form.Group controlId="formMovieName">
                    <Form.Control value={value} onChange={updateValue} />
                </Form.Group>
                {value === expectedAnswer ? "✔️" : "❌"}
            </div>
        );
    }
}
