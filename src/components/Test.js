import React from 'react'
import { useVideo } from "../contexts/VideoContext"

export default function Test() {
    const { getVideoName } = useVideo()

    return (
        <div>
            <br />
            <br /><br /><br />
            <h2>The video is {getVideoName()}</h2>
            <br />
        </div>
    )
}
