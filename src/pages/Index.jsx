import React from "react"
import { renderToStaticMarkup } from 'react-dom/server'

const Index = () => {
  return (
    <div>
      <section className="Root">
        root
      </section>
    </div>
  )
}

export default () => renderToStaticMarkup(<Index />)
