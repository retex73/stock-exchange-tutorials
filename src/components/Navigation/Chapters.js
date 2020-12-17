import React, { useEffect } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { useVideo } from "../../contexts/VideoContext"
export default function Chapters() {
    const { data } = useVideo()

    const setVideo = (name) => {
        console.log('name')
        return name
    }


    const getChapters = (key) => {
        const chapters = data[key + 1].contents




        let ul = document.getElementById(key + 1)


        chapters.map(chapter => {
            let friendlyName = chapter.name.substring(0, chapter.name.lastIndexOf(('.')) || chapter.name)
            let newAnchor = document.createElement("a")
            newAnchor.textContent = friendlyName
            newAnchor.setAttribute("href", "../" + chapter.name)
            newAnchor.addEventListener("click", function (e) {
                e.preventDefault()
                setVideo(chapter.name)
            })
            newAnchor.setAttribute('class', 'list-group-item list-group-item-action')
            ul.appendChild(newAnchor)
        })



    }

    const card = (title, key) => {
        let incrementedKey = key + 1 // seems I need to do this to make accordion work \_(ツ)_/
        return (
            <Card>
                <Accordion.Toggle
                    onClick={() => getChapters(key)}
                    as={Card.Header}
                    eventKey={incrementedKey}>
                    {title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={incrementedKey}>
                    <Card.Body>

                        <div class="list-group list-group-flush" id={key}></div>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }



    if (data) {

        return (
            <Accordion defaultActiveKey="1">
                <Card.Header className="justify-con" style={{ backgroundColor: "white", padding: 0, alignItems: "left" }}>

                    {
                        data.map((contents, key) => {
                            return card(contents.name, key)
                        })
                    }
                </Card.Header>
            </Accordion>


        )
    }
    else {
        return (
            <h2>Waiting for data...</h2>
        )
    }


}