import React from "react"
import { renderToStaticMarkup } from 'react-dom/server'

import './index.css'

const Index = () => {
  return (
    <div>
      <section>
        root
      </section>
    </div>
  )
}

export default () => `
  <!DOCTYPE html>
  <html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>タイトル</title>
  </head>
  <body>
    ${renderToStaticMarkup(<Index />)}
  </body>
  </html>
`
