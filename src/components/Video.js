import React from 'react'
import { useVideo } from "../contexts/VideoContext"
import ReactPlayer from 'react-player'


export default function Video(chapter) {

    const path = 'http://localhost:3000/videos/' + chapter.chapter + '/'
    const { getVideoName } = useVideo()
    const videoName = getVideoName()
    const mediaUrl = path + videoName

    return (
        <div>
            { videoName ? (
                <ReactPlayer
                    url={mediaUrl}
                    controls={true}
                    playing={false}
                />) : (
                    <div>No video selected</div>
                )
            }
            <h4>{typeof (videoName) != "undefined" ? videoName.slice(0, -4) : "non set"}</h4>
        </div>
    )
}
