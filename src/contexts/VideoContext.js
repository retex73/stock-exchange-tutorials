import React, { useContext, useState } from "react"


const VideoContext = React.createContext()


export function useVideo() {
    return useContext(VideoContext)
}

export function VideoProvider({ children }) {
    const [videoName, setVideoName] = useState()
    const [chapterName, setChapterName] = useState()
    const [data, setData] = useState()

    function setVideo(name) {
        setVideoName(name)
        return name
    }

    function getVideoName() {
        return videoName
    }

    function setChapterX(name) {
        setChapterName(name)
    }

    function getChapterName() {
        return chapterName
    }



    const value = {
        setVideo,
        getVideoName,
        setChapterX,
        getChapterName,
        data,
        setData
    }

    return (
        <VideoContext.Provider value={value}>
            {children}
        </VideoContext.Provider>
    )
}
