import React, { useEffect, useState } from 'react'
import Navbar from './assets/Navbar'
import Hero from './assets/Hero'
import UploadContactList from './assets/UploadContactList'
import ComposeEmail from './assets/ComposeEmail'
import EmailPreview from './assets/EmailPreview'
import Footer from './assets/Footer'
import EmailProvider from './usecontext/EmailProvider'
import toast, { Toaster } from 'react-hot-toast'



const App = () => {

  const [darkMode, setDarkMode] = useState(false)


  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen bg-white dark:bg-slate-950`}>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
      <Hero />
      <div className='flex flex-col lg:flex-row justify-between items-center gap-10 mt-4'>

        <EmailProvider>

          <UploadContactList />


          <ComposeEmail />


          <EmailPreview />


        </EmailProvider>
      </div>

      <Footer />

      <Toaster />
    </div>
  )
}

export default App