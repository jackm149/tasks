import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];

    const [chosenColor, setChosenColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }

    return (
        <div style={{ textAlign: "center" }}>
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    label={
                        <span
                            style={{
                                backgroundColor: color,
                                padding: "2px 6px",
                            }}
                        >
                            {color}
                        </span>
                    }
                    value={color}
                    checked={chosenColor === color}
                    onChange={updateColor}
                />
            ))}

            <p>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: chosenColor,
                        padding: "2px 6px",
                    }}
                >
                    {chosenColor}
                </span>
                .
            </p>
        </div>
    );
}
