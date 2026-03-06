import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    value,
    setValue,
}: {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <Button
            onClick={() => {
                setValue(value * 2);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    value,
    setValue,
}: {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <Button
            onClick={() => {
                setValue(value * 0.5);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} setValue={setDhValue}></Doubler>
            <Halver value={dhValue} setValue={setDhValue}></Halver>
        </div>
    );
}
