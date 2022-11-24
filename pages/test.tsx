import { Layout } from "components/layout/Layout"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    background-color: red;
    height: 100vh;
`

const Test = () => {
    return (
        <Layout>
            <>
                <Container>
                    <div>123</div>
                </Container>
            </>
        </Layout>
    )
}

export default Test