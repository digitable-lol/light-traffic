import React from "react"
import { BrowserRouter } from "react-router-dom"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import { CONFIG } from "./configs"
import { AppRouter } from "./routes"

function App() {
  return (
    <BrowserRouter basename={CONFIG.basename}>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
