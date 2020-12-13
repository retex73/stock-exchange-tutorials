import React, { useState } from 'react'
import { Button, Card, Accordion, Row, Col } from "react-bootstrap"
import Video from "./Video"
import { useVideo } from "../contexts/VideoContext"

const data = require('./Data.json')

export default function TutorialHome() {
    const [chapter, setChapter] = useState('Stock Trading for Beginners')
    const { setVideo } = useVideo()

    function showSections(section, contents, key, setVideo) {
        setChapter(section)

        let ul = document.getElementById(key)
        contents.map(content => {
            let stringName = content.name.substring(0, content.name.lastIndexOf('.')) || content.name
            let li = document.createElement("li");
            let newAnchor = document.createElement("a")
            newAnchor.textContent = stringName
            newAnchor.setAttribute("href", "../" + content.name)
            li.addEventListener("click", function (e) {
                e.preventDefault()
                setVideo(content.name)
            })
            li.appendChild(newAnchor)
            ul.appendChild(li);
        })
    }


    const CardChapter = (chapter, contents, key) => {
        return (
            <Accordion defaultActiveKey="1" key={key}>
                <Card.Header className="justify-con" style={{ backgroundColor: "white", padding: 0, alignItems: "left" }}>
                    <Accordion.Toggle
                        as={Button}
                        onClick={() => showSections(chapter, contents, key, setVideo)}
                        variant="link"
                        eventKey="0"
                        style={{ color: "black", textAlign: "left", justifyContent: "center" }
                        }>
                        {chapter}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Text>
                        <ul id={key}></ul>
                    </Card.Text>
                </Accordion.Collapse>
            </Accordion>
        )
    }


    return (

        <Row>
            <Col className="col-9">
                <Row>
                    <h2>{chapter}</h2>
                </Row>
                <Row>
                    <Video chapter={chapter}></Video>
                </Row>
            </Col>
            <Col>
                <Card>
                    <Card.Header>
                        <h4 className="text-center mb-1">Course Content</h4>
                    </Card.Header>
                    {data[0].contents.map((content, key) => CardChapter(content.name, content.contents, key))}
                </Card>
            </Col>
        </Row>
    )
}
