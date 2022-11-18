import React from "react"
import { Intro } from "components/treatments/Intro"

import { Layout } from "components/layout/Layout"
import { Title } from "components/treatments/Title"
import { Boxes } from "components/treatments/Boxes"
import { Details } from "components/treatments/Details"

export default function Treatments() {
    return (
        <Layout>
            <>
                <Intro />
                <Title />
                <Boxes />
                <Details />
            </>
        </Layout>
    )
}
