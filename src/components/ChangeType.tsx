import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [currentType, setType] = useState<QuestionType>(
        "short_answer_question",
    );

    function changeType(): void {
        if (currentType === "multiple_choice_question") {
            setType("short_answer_question");
        } else {
            setType("multiple_choice_question");
        }
    }

    return (
        <span>
            <Button onClick={changeType}>Change Type</Button>

            {currentType === "multiple_choice_question" && "Multiple Choice"}
            {currentType === "short_answer_question" && "Short Answer"}
        </span>
    );
}
