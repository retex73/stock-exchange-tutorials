import React from 'react'
import { Button, Card, Accordion, Row, Col } from "react-bootstrap"

export default function Chapter(chapter, key, showSections) {
    return (
        <Accordion defaultActiveKey="1" >
            <Card.Header className="justify-con" style={{ backgroundColor: "white", padding: 0, alignItems: "left" }}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "black", textAlign: "left", justifyContent: "center" }}>
                    {chapter}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Text>
                    Hello! I'm the body
                    </Card.Text>
            </Accordion.Collapse>
        </Accordion>
    )
}
