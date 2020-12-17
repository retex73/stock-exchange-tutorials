import React, { useState } from 'react'
import { Button, Card, Accordion, Row, Col } from "react-bootstrap"
import Chapters from '../components/Navigation/Chapters'
import Video from "./Video"
import { useVideo } from "../contexts/VideoContext"

const data = require('./Data.json')

export default function TutorialHome() {

    const { setData } = useVideo()

    setData(data[0].contents)

    return (
        <Row>
            <Col className="col-12">
                Main Header
            </Col>
            <Col className="col-9">
                Video
            </Col>
            <Col className="col-3">
                <Chapters />
            </Col>
        </Row>
    )
}
