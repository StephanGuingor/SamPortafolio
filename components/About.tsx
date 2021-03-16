import Button from 'react-bootstrap/Button'
import Image from 'next/image'
import styles from './AboutSection.module.css'



export default function AboutSection()
{
    return (
        <div className={styles.baseDiv}>
            <div className={styles.description}>
                <div className={styles.title}>
                    <div className={styles.hidden}>
                        <h2>Always pushing the <span className={styles.boldSpan}>limits</span></h2>
                    </div>
                    
                </div>
                <p> Contact me for any work related thingy. </p>
                <Button className="btn btn-dark">Contact Me</Button>
            </div>
            <div className={styles.image}>
                <Image src="/images/profile.jpg" alt="Samuel Bakas" width={648} height={432} className={styles.imgVal}/>
            </div>
        </div>
    )
}