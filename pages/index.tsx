import React from "react"
import { Intro } from "components/mainpage/Intro"

import { Layout } from "components/layout/Layout"
import { HowCanIHelp } from "components/mainpage/HowCanIHelp"
import { Treatments } from "components/mainpage/Treatments"
import { Footer } from "components/layout/Footer"

export default function Home() {
    return (
        <Layout>
            <>
                <Intro />
                <HowCanIHelp />
                <Treatments />
                <Footer />
            </>
        </Layout>
    )
}
