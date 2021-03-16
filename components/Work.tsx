import Container from 'react-bootstrap/Container'
import Link from 'next/link'
import styles from './Work.module.css'
import Date from './Date'
import Image from 'next/image'
export default function WorkSection({ allWorksData })
{
    return (
        <>
            <div className={styles.baseDiv} id="work">

            <div className={styles.image}>
                <Image src="/images/profile.jpg" alt="Samuel Bakas" width={648} height={432} className={styles.imgVal}/>
            </div>
                <Container className={styles.mainContainer}>
                    <div className={styles.title}>
                    <h2>Some of my <span className={styles.boldSpan}>work</span></h2>
                    <br/>
                    </div>
                   
                    <ul className={styles.list}>
                        {
                            allWorksData.map(({id,date,title}) => (
                                <li key={id} className={styles.listItem}>
                                    <Link href={`/works/${id}`}>
                                        <a>{title}</a>
                                    </Link>    
                                    <br/>
                                    <small>
                                        <Date dateString={date}/>
                                    </small>
                                </li>
                            ))
                        }
                    </ul>
                </Container>
            </div>
        </>
    )
}

