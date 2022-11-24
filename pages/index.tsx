import React from "react"
import { Intro } from "components/mainpage/Intro"

import { Layout } from "components/layout/Layout"
import { HowCanIHelp } from "components/mainpage/HowCanIHelp"
import { Treatments } from "components/mainpage/Treatments"
import { isResponsive } from "helper/isRepsonsive"

export default function Mainpage() {
    const isRepsonsive = isResponsive()
    return (
        <Layout>
            <>
                <Intro responsive={isRepsonsive} />
                <HowCanIHelp responsive={isRepsonsive} />
                <Treatments />
            </>
        </Layout>
    )
}
