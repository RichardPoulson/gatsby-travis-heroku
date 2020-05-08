import React from "react"

import Paperbase from '../components/Paperbase'
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Paperbase>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Paperbase>
)

export default NotFoundPage
