import React, { useState, useEffect } from 'react'
import { Button, Card, Accordion, Row, Col } from "react-bootstrap"
import { useVideo } from "../contexts/VideoContext"

const data = require('./Data.json')


// console.log('data', data[0].contents)







export default function TutorialHome() {




    const [chapter, setChapter] = useState('Stock Trading for Beginners')

    useEffect(() => {
        console.log('chapter updated')

    }, [chapter]);

    const showSections = (section) => {

        console.log('heading', section)
        setChapter(section)
    }

    const SectionsList = (list) => {
        return (
            <Card.Text>
                {list}
            </Card.Text>
        )
    }
    const CardChapter = (chapter, contents, key) => {




        contents.map(content => {
            // console.log(content.name)
            const { name } = content
            console.log('name', name)
        })



        return (
            <Accordion defaultActiveKey="1" key={key}>
                <Card.Header className="justify-con" style={{ backgroundColor: "white", padding: 0, alignItems: "left" }}>
                    <Accordion.Toggle as={Button} onClick={() => showSections(chapter)} variant="link" eventKey="0" style={{ color: "black", textAlign: "left", justifyContent: "center" }}>
                        {chapter}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Text>
                        Hello! I'm the body
                    </Card.Text>
                    {

                        // contents.map(content => {
                        //     console.log('content', content)
                        // })
                        // contents.map(list => {
                        //     SectionsList(list)
                        // })

                    }
                </Accordion.Collapse>
            </Accordion>
        )
    }


    return (
        <Row>
            <Col className="col-9">
                <h2>{chapter}</h2>
            </Col>
            <Col>
                <Card>
                    <Card.Header>
                        <h4 className="text-center mb-1">Course Content</h4>
                    </Card.Header>

                    {/* {chapters.map((chapter, key) => CardChapter(chapter, key))} */}
                    {/* {
                        data[0].contents.map(content => {

                            let { contents } = content
                            console.log('content', contents)
                            // console.log('content', content.contents)

                        })} */}
                    {

                        data[0].contents.map((content, index) => CardChapter(content.name, content.contents, index))
                    }


                </Card>
            </Col>
        </Row>

    )
}
