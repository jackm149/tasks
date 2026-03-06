import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function toggleVisible(): void {
        setIsVisible(!isVisible);
    }

    return (
        <span>
            <Button
                onClick={() => {
                    toggleVisible();
                }}
            >
                Reveal Answer
            </Button>
            {isVisible && "42"}
        </span>
    );
}
