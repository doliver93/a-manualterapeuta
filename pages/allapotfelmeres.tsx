import { Images } from "components/condition-survey/Images"
import { Intro } from "components/condition-survey/Intro"
import { MoreInfo } from "components/condition-survey/MoreInfo"
import { Steps } from "components/condition-survey/Steps"
import { Layout } from "components/layout/Layout"
import React from "react"
const ConditionSurvey = () => {
    return (
        <Layout>
            <>
                <Intro />
                <Steps />
                <MoreInfo />
                <Images />
            </>
        </Layout>
    )
}

export default ConditionSurvey