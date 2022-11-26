import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Home(){
    return(
        <>
        <nav >
            <p className={styles.nav}><Link href='/calc'>calculator</Link></p>
            <p className={styles.nav}><Link href='/weather'>weather</Link></p>
        </nav>
        </>
    )
}