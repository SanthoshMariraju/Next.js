import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Topbar } from '../components/topbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Topbar />
     <div className='page-container'>
        <div className={styles.main}>
            <h1>New Next.js App</h1>
            <h3>this my first app articals using next.js toturial number 1</h3>
        </div>
     </div>
    </>
  )
}
