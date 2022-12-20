import React from "react"
import Head from "next/head"
import favicon from "images/layout/favicon.png"
import facebook from "images/layout/a-manualterapeuta-facebook.png"

export const HeadComponent = () => {
    return (
        <Head>
            <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
            <title>m a n u á l t e r a p e u t a</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, user-scalable=yes" />
            <meta property="og:title" content="A. manualterapeuta" />
            <meta property="og:description" content="Papp Alexandra. Manualterapeuta. Segítségemmel megőrizheted mozgásszerveid egészségét. Manuálterápiás és lágyrész kezeléses módszereimmel feltárom a fájdalmaid okát, amelyek akadályozhatnak a mindennapi tevékenységeidben." />
            <meta property="og:image" content={facebook.src} />
            <meta property="og:url" content="https://a-manualterapeuta.hu" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        </Head>
    )
}