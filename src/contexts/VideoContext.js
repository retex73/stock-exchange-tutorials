import React, { useContext, useState } from "react"


const VideoContext = React.createContext()

export function useVideo() {
    return useContext(VideoContext)
}






export function VideoProvider({ children }) {
    const [currentVideo, setCurrentVideo] = useState()
    const [loading, setLoading] = useState(true)




    function doSomething(section) {
        console.log('section', section)
    }




    const value = {
        doSomething
    }

    return (
        <VideoContext.Provider value={value}>
            {children}
        </VideoContext.Provider>
    )
}
