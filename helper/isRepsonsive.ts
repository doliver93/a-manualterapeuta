import { breakPoint } from "assets/styles/shared"
import { useState, useEffect } from "react"

export const isResponsive = () => {
    const [responsive, setResponsive ] = useState<boolean>(false)
    useEffect(()=>{
        const { outerWidth: width } = window
        const handleResize = () => {
            const { outerWidth: width } = window
            setResponsive(width <= breakPoint.md.width)
        }
        setResponsive(width <= breakPoint.md.width)
        window.addEventListener("resize", handleResize)
    }, [])
    return responsive
}