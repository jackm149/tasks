import React from "react";
import "./App.css";
import dog from "./assets/dog.jpg";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <h1 className="App-header">This is my new header!</h1>

            <img src={dog} alt="Here is a cute dog that I found online!" />

            <p>Jack Mallett</p>

            <p>Hello World</p>

            <ol>
                <li>First item in my new list!</li>
                <li>Second item in my new list!</li>
                <li>Third item in my new list!</li>
            </ol>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "200px",
                                backgroundColor: "red",
                                margin: "0 auto",
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "200px",
                                backgroundColor: "red",
                                margin: "0 auto",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
