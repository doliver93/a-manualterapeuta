import { breakPoint } from "assets/styles/shared"
import { useState, useEffect } from "react"

export const findViewport = () => {

    const getViewport = (width: number, height: number) => {
        switch (true) {
            case width <= breakPoint.sm.width:
                return "mobile"
                break
            case width <= breakPoint.md.width && width > breakPoint.sm.width && height <= 480:
                return "landscape"
                break
            case width <= breakPoint.md.width && width > breakPoint.sm.width:
                return "tablet"
                break
            default:
                return "laptop"
                break
        }
    }

    const [viewport, setViewport ] = useState<string>("xl")
    useEffect(()=>{
        const { outerWidth: width, outerHeight: height } = window
        const handleResize = () => {
            const { outerWidth: width, outerHeight: height } = window
            setViewport(getViewport(width, height))
        }
        setViewport(getViewport(width, height))
        window.addEventListener("resize", handleResize)
    }, [])
    return viewport
}