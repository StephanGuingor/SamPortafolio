import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import styles from './Navigation.module.css'
export default function Navigation() {
    const username = null;

    return (
      
        <Navbar bg="light" expand="lg" variant="light">
            <Link href="/">
                <h2 className={styles.bold}>Samuel Bakas</h2>
            </Link>
            <Nav className="mr-auto">
                {/* <Link href="/about">
                    <Nav.Link>About</Nav.Link>
                </Link> */}
               
            </Nav>
        </Navbar>
      
    )
}