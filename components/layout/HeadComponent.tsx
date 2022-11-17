import React from "react"
import Head from "next/head"
import favicon from "images/layout/favicon.png"

export const HeadComponent = () => {
    return (
        <Head>
            <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
            <title>manualterapeuta</title>
        </Head>
    )
}