import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Auth0ProvideWithNavigate from './auth/Auth0ProvideWithNavigate'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProvideWithNavigate>
        <AppRoutes />
      </Auth0ProvideWithNavigate>
    </Router>
  </React.StrictMode>
)
