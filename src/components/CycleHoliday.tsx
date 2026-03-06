import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "🎄",
    Halloween = "🎃",
    IndependenceDay = "🎆",
    Thanksgiving = "🦃",
    ValentinesDay = "💘",
}

const nextAlphabet: Record<Holiday, Holiday> = {
    [Holiday.Christmas]: Holiday.Halloween,
    [Holiday.Halloween]: Holiday.IndependenceDay,
    [Holiday.IndependenceDay]: Holiday.Thanksgiving,
    [Holiday.Thanksgiving]: Holiday.ValentinesDay,
    [Holiday.ValentinesDay]: Holiday.Christmas,
};

const nextYear: Record<Holiday, Holiday> = {
    [Holiday.ValentinesDay]: Holiday.IndependenceDay,
    [Holiday.IndependenceDay]: Holiday.Halloween,
    [Holiday.Halloween]: Holiday.Thanksgiving,
    [Holiday.Thanksgiving]: Holiday.Christmas,
    [Holiday.Christmas]: Holiday.ValentinesDay,
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(Holiday.Christmas);

    return (
        <div>
            <p>Holiday: {holiday}</p>

            <Button
                onClick={() => {
                    setHoliday(nextAlphabet[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>

            <Button
                onClick={() => {
                    setHoliday(nextYear[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
