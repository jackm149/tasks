import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

// roll initial dice once
let initialLeft = d6();
let initialRight = d6();

while (initialLeft === initialRight) {
    initialRight = d6();
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(initialLeft);
    const [rightDie, setRightDie] = useState<number>(initialRight);

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>

            <div>
                <Button
                    onClick={() => {
                        setLeftDie(d6());
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        setRightDie(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>

            {leftDie === rightDie && leftDie === 1 && <div>Lose</div>}
            {leftDie === rightDie && leftDie !== 1 && <div>Win</div>}
        </div>
    );
}
