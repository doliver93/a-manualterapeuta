import { AppProps } from "next/app"
import React from "react"
import { HeadComponent } from "components/layout/HeadComponent"
import "styles/global.css"
import "/assets/fonts/fonts.scss"

function App({ Component, pageProps }: AppProps){
    return (
        <>
            <HeadComponent />
            <Component {...pageProps} />
        </>
    )
}

export default App