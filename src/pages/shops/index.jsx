import React from "react"
import { renderToStaticMarkup } from 'react-dom/server'

const Shops = () => {
  return (
    <div>
      <section className="Shops">
        Shops
      </section>
    </div>
  )
}

export default () => renderToStaticMarkup(<Shops />)
