import React, { useContext, useState } from "react"


const VideoContext = React.createContext()

export function useVideo() {
    return useContext(VideoContext)
}


export function VideoProvider({ children }) {
    const [videoName, setVideoName] = useState()
    const [chapter, setChapter] = useState()
    const [loading, setLoading] = useState(true)




    function doSomething(section) {
        console.log('section', section)
    }

    function setVideo(name) {
        setVideoName(name)
        return name
    }

    function getVideoName() {
        return videoName
    }




    const value = {
        doSomething,
        setVideo,
        getVideoName
    }

    return (
        <VideoContext.Provider value={value}>
            {children}
        </VideoContext.Provider>
    )
}
