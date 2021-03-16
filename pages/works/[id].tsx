import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Date from '../../components/Date'
import ReactPlayer from 'react-player/lazy'
import { getAllWorkIds,getWorkData } from '../../lib/works'
import styles from './id.module.css'
// Animation
import {motion} from 'framer-motion'
import {pageAnimation} from '../../lib/Animation'

export default function Work({ postData }) {
    return (
  <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" className={styles.base}>
      <Container className="d-flex justify-content-center my-3">
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <Container className="d-flex justify-content-center flex-direction-column my-3">
              <div>
              <h1>{postData.title}</h1>
                <ReactPlayer
                  url={postData.link} controls
                />
              <Date dateString={postData.date}/>
            </div>
          </Container>
    
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Container>
    </motion.div>
    )
  }

  export async function getStaticPaths() {
    const paths = getAllWorkIds()
    return {
      paths,
      fallback: false
    }
  }
  
  export async function getStaticProps({ params }) {
    const postData = await getWorkData(params.id)
    return {
      props: {
        postData
      }
    }
  }