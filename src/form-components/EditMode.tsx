import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function toggleEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={editMode}
                onChange={toggleEditMode}
            />
            {editMode ?
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>

                    <Form.Group controlId="studentCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Student"
                            checked={isStudent}
                            onChange={updateStudent}
                        />
                    </Form.Group>
                </div>
            :   <p>
                    {name} {isStudent ? "is a student" : "is not a student"}
                </p>
            }
        </div>
    );
}
