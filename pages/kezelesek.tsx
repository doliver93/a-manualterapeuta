import React from "react"
import { Intro } from "components/treatments/Intro"

import { Layout } from "components/layout/Layout"
import { Title } from "components/treatments/Title"
import { Boxes } from "components/treatments/Boxes"
import { Details } from "components/treatments/Details"
import { findViewport } from "helper/findViewport"

export default function Treatments() {
    const viewport = findViewport()
    return (
        <Layout>
            <>
                <Intro viewport={viewport} />
                <Title />
                <Boxes />
                <Details viewport={viewport} />
            </>
        </Layout>
    )
}
