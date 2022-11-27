import React from "react"
import Head from "next/head"
import favicon from "images/layout/favicon.png"

export const HeadComponent = () => {
    return (
        <Head>
            <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
            <title>m a n u á l t e r a p e u t a</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, user-scalable=yes" />
        </Head>
    )
}