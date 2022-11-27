import { Images } from "components/condition-survey/Images"
import { ImagesResponsive } from "components/condition-survey/ImagesResponsive"
import { Intro } from "components/condition-survey/Intro"
import { MoreInfo } from "components/condition-survey/MoreInfo"
import { Steps } from "components/condition-survey/Steps"
import { Layout } from "components/layout/Layout"
import { findViewport } from "helper/findViewport"
import React from "react"
const ConditionSurvey = () => {
    const viewport = findViewport()
    return (
        <Layout>
            <>
                <Intro viewport={viewport}/>
                <Steps />
                <MoreInfo />
                {viewport === "laptop" ? <Images /> : <ImagesResponsive />}
            </>
        </Layout>
    )
}

export default ConditionSurvey