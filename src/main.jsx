import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatSection from './components/Chat/ChatSection'
import { ContentProvider } from './components/Context/ContentProvider'
import "../index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContentProvider>
      <ChatSection />
    </ContentProvider>
  </React.StrictMode>
)
