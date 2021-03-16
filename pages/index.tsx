import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import AboutSection from '../components/About'
import WorkSection from '../components/Work'
import { getSortedWorksData } from '../lib/works'

// Animation
import {motion} from 'framer-motion'
import {pageAnimation} from '../lib/Animation'
export default function Home({ allWorksData }) {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
         <AboutSection/>
         <WorkSection allWorksData={allWorksData}/>
    </motion.div>
  )
}

export async function getStaticProps() {
  const allWorksData = getSortedWorksData()
  return {
    props: {
      allWorksData
    }
  }
}