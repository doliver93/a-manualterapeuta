import React from "react"
import { Intro } from "components/mainpage/Intro"

import { Layout } from "components/layout/Layout"
import { HowCanIHelp } from "components/mainpage/HowCanIHelp"
import { Treatments } from "components/mainpage/Treatments"

export default function Mainpage() {
    return (
        <Layout>
            <>
                <Intro />
                <HowCanIHelp />
                <Treatments />
            </>
        </Layout>
    )
}
