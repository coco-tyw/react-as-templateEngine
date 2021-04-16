import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const App = () => <div>react</div>

export default () => renderToStaticMarkup(<App />)
