import React from "react";
import data from "../data";
import {Accordion, Card, Button} from "react-bootstrap";

function ArrayMainScreen() {

    return (
        <div className="algorithms">
            <p>Select an algorithm you want to see!</p>
            {
                data.algorithmsArraySearch.map(algorithm =>
                    <div key={algorithm._id} style={{whiteSpace: "pre-wrap"}}>

                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        { algorithm.name }
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body><Card.Text className="new-line">{algorithm.algo}</Card.Text></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                </div>)

            }
        </div>

    )
}

export default ArrayMainScreen;