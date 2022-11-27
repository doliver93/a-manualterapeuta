import React from "react"
import { Intro } from "components/mainpage/Intro"

import { Layout } from "components/layout/Layout"
import { HowCanIHelp } from "components/mainpage/HowCanIHelp"
import { Treatments } from "components/mainpage/Treatments"
import { findViewport } from "helper/findViewport"
import { TreatmentsResponsive } from "components/mainpage/TreatmentsResponsive"

export default function Mainpage() {
    const viewport = findViewport()
    return (
        <Layout>
            <>
                <Intro viewport={viewport} />
                <HowCanIHelp viewport={viewport} />
                {viewport === "laptop" ? <Treatments /> : <TreatmentsResponsive viewport={viewport} />}
            </>
        </Layout>
    )
}
