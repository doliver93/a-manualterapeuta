import { breakPoint } from "assets/styles/shared"
import { useState, useEffect } from "react"

export const getViewport = (width: number) => {
    switch (true) {
        case width <= breakPoint.sm.width:
            return "mobile"
            break
        case width <= breakPoint.md.width && width > breakPoint.sm.width:
            return "tablet"
            break
        default:
            return "laptop"
            break
    }
}
export const findViewport = () => {

    const getViewport = (width: number, height: number) => {
        switch (true) {
            case width <= breakPoint.sm.width || height <= 480:
                return "mobile"
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
        const { outerWidth: width, outerWidth: height } = window
        const handleResize = () => {
            const { outerWidth: width } = window
            setViewport(getViewport(width, height))
        }
        setViewport(getViewport(width, height))
        window.addEventListener("resize", handleResize)
    }, [])
    return viewport
}