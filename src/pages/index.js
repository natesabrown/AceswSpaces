import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AWSWrapper from '../components/shared/awswrapper/awswrapper'

import Topper from '../components/topper'
import Mission from '../components/mission'
import Team from '../components/team'
import SignUp from '../components/signup'
import Contact from '../components/contact'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Topper />
    <Mission />
    <Team />
    <SignUp />
    <Contact />
  </Layout>
)

export default IndexPage
