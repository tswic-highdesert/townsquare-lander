import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import LocalMomentumBlock from './components/LocalMomentumBlock'
import EarlyAccessIncentivesBlock from './components/EarlyAccessIncentivesBlock'
import SignUpForm from './components/SignUpForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <LocalMomentumBlock />
        <EarlyAccessIncentivesBlock />
        <SignUpForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
