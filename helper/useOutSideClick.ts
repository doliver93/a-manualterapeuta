import { useEffect, RefObject } from "react"

interface useOutsideClickProps {
    watch: boolean
    ref: RefObject<HTMLDivElement>
    onTrigger: () => void
}
export function useOutsideClick({ watch, ref, onTrigger }: useOutsideClickProps) {
   
    const handleClickOutside = (e: MouseEvent) => {
        if (!ref.current?.contains(e.target as Node)) {
            onTrigger()
            console.log("ref:", ref)
            console.log(e.target as Node)
            console.log("not contains")
        } else {
            console.log("ref:", ref)
            console.log(e.target as Node)
            console.log("contains")
        }
    }

    useEffect(() => {
        if (watch) document.addEventListener("click", handleClickOutside)
        else document.removeEventListener("click", handleClickOutside)

        return () => document.removeEventListener("click", handleClickOutside)
    }, [watch])
}