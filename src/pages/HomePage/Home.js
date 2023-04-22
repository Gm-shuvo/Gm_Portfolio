import React from 'react'
import Projects from '../Projects/Projects'
import About from './About/About'
import Banner from './Banner/Banner'
import ContractMe from './ContractMe/ContractMe'
import Services from './Services/Services'
import Skills from './Skills/Skills'

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Skills />
      <Projects />
      <ContractMe />
    </div>
  )
}
