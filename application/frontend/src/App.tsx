import React from "react"
import { BrowserRouter } from "react-router-dom"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import { CONFIG } from "./configs"
import { UserProvider } from "./context/UserContext"
import { AppRouter } from "./routes"

function App() {
  return (
    <UserProvider>
      <BrowserRouter basename={CONFIG.basename}>
        <AppRouter />
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
