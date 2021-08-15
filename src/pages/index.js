import * as React from "react"
import Layout from "../components/layouts"
import { StaticImage } from "gatsby-plugin-image"
// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>ohaaaaaaaaaaaaaaaaa</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://placekitten.com/800/600"
      />
    </Layout>

  )
}

export default IndexPage
